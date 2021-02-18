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

// מסך 4
// לחצן – חדש
// נפתח חלונית משקל פרודקט תמונה
// לחצן שמירה שסוגר את החלון
// מתווסף שורה במסך + לחצן תיקון (יפתח חלונית עם הנתונים הקיימים) + לחצן מחיקה (יפתח חלונית אישור)
// לחצן “End Day

const WorksPage = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [works, setWorks] = useState([]);
  const [currentWork, setCurrentWork] = useState({});
  const details = route.params;
  const onPress = () => {
    setShow(true);
  };

  return (
    <>
      <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
        <HeadBar navigation={navigation} />
        <Text>WORKS</Text>
        {show && (
          <DetailsOfWork works={works} setWorks={setWorks} setShow={setShow} />
        )}
        {works.map((work, index) => (
          <View key={index}>
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
              style={{ width: 10 }}
            >
              <Text style={{ color: "red", backgroundColor: "yellow" }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
        {showModal && (
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text
                    style={(styles.modalText, { backgroundColor: "orange" })}
                  >
                    Tons or Load:{currentWork.TonsOrLoad}, Product:
                    {currentWork.Product}
                  </Text>
                  <Text style={styles.modalText}>Remove this row?</Text>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      let theWorks = works;
                      let theNewWorks = theWorks.filter((x, ind) => {
                        ind !== currentWork.index;
                      });
                      setWorks(theNewWorks);
                      setShowModal(false);
                    }}
                  >
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    <Text style={styles.textStyle}>No</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        )}
        <TouchableOpacity onPress={onPress}>
          <Text style={{ marginTop: 50, color: "red" }}>New Work</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WorksPage;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
