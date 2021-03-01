import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import WorksStyles from "./WorksStyles";
import HeadBar from "../../component/HeadBar";
import { useState } from "react/cjs/react.development";
import DetailsOfWork from "../DetailsOfWorkPage/DetailsOfWork";

const WorksPage = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [works, setWorks] = useState([]);
  const [currentWork, setCurrentWork] = useState({});
  const details = route.params;

  const onPress = () => {
    setShow(true);
  };

  const theModal = () => {
    return (
      <View style={WorksStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={WorksStyles.centeredView}>
            <View style={WorksStyles.modalView}>
              <Text
                style={(WorksStyles.modalText, { backgroundColor: "orange" })}
              >
                Tons or Load:{currentWork.TonsOrLoad}, Product:
                {currentWork.Product}
              </Text>
              <Text style={WorksStyles.modalText}>Remove this row?</Text>
              <TouchableHighlight
                style={{
                  ...WorksStyles.openButton,
                  backgroundColor: "#2196F3",
                }}
                onPress={() => {
                  let theWorks = works;
                  let theNewWorks = theWorks.filter(
                    (x, ind) => ind !== currentWork.index
                  );
                  setWorks(theNewWorks);
                  setShowModal(false);
                }}
              >
                <Text style={WorksStyles.textStyle}>Yes</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...WorksStyles.openButton,
                  backgroundColor: "#2196F3",
                }}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={WorksStyles.textStyle}>No</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          marginTop: StatusBar.currentHieght || 30,
          position: "relative",
        }}
      >
        <HeadBar navigation={navigation} />
        <View style={{ height: "100%" }}>
          {show && (
            <DetailsOfWork
              style={{
                height: "100%",
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: "grey",
                width: "90%",
                // height: 550,
                position: "absolute",
                borderRadius: 50,
                elevation: 2,
              }}
              works={works}
              setWorks={setWorks}
              setShow={setShow}
            />
          )}

          <View
            style={{
              // height: 500,
              marginBottom: 20,
              elevation: 1,
              flex: 0.8,
              // position: "absolute",
              // width: "100%",
            }}
          >
            <Text
              style={{
                marginTop: 20,
                fontSize: 30,
                fontWeight: "bold",
                color: "blue",
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              THE WORKS
            </Text>
            <ScrollView style={{ backgroundColor: "red" }}>
              {works.map((work, index) => (
                <View key={index} style={{ alignSelf: "center" }}>
                  <Text>
                    Tons or Load:{work.TonsOrLoad}, Product:{work.Product}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setShowModal(true);
                      let theWork = work;
                      theWork.index = index;
                      setCurrentWork(theWork);
                    }}
                    style={{
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: "#003366",
                    }}
                  >
                    <Text style={{ color: "red", backgroundColor: "yellow" }}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          {theModal()}

          <View>
            <TouchableOpacity
              style={{
                zIndex: 1,
                // position: "relative",
                alignSelf: "center",
                alignItems: "center",
                bottom: 0,
                backgroundColor: "orange",
                borderRadius: 20,
                width: "60%",
                height: 50,
                justifyContent: "center",
              }}
              onPress={onPress}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                New Work
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default WorksPage;
