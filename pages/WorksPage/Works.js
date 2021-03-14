import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Modal,
  Image,
  BackHandler,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import WorksStyles from "./WorksStyles";
import HeadBar from "../../component/HeadBar";
import DetailsOfWork from "../DetailsOfWorkPage/DetailsOfWork";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "@react-navigation/native";
import * as Updates from "expo-updates";

const WorksPage = ({ route, navigation }) => {
  const [notFirstTime, setNotFirstTime] = useState(false);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState();
  const [currentWork, setCurrentWork] = useState({});
  const details = route.params;
  const capturedImage = route.params;
  const [image, setImage] = useState();
  const [imageStyle, setImageStyle] = useState({
    width: 50,
    height: 60,
    marginTop: -15,
  });

  useEffect(() => {
    if (capturedImage) {
      console.log("o ye!");
      // console.log(capturedImage);
      setImage(capturedImage);
    }
  }, [capturedImage]);

  const firstTime = async () => {
    const theJobs = await AsyncStorage.getItem("loads");
    if (theJobs) {
      const theJobs1 = JSON.parse(theJobs);
      await setJobs(theJobs1);
      console.log(jobs);
    }
  };

  useEffect(() => {
    firstTime();
  }, []);

  const onPress = () => {
    setShow(true);
    setImage();
  };

  async function reloadApp() {
    await Updates.reloadAsync();
  }

  const TheModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={WorksStyles.modalView}>
          {status === "remove" ? (
            <Text style={WorksStyles.modaltext}>
              Tons or Load - {currentWork.TonsOrLoad},{"\n"}Product -
              {currentWork.Product} {"\n"}
              Remove this row?
            </Text>
          ) : (
            <Text style={WorksStyles.modaltext}>
              Are you sure you want to exit the app?
            </Text>
          )}
          <View style={WorksStyles.btnmodalView}>
            <TouchableOpacity
              style={WorksStyles.btnmodal}
              onPress={async () => {
                if (status === "remove") {
                  let theJobs = jobs;
                  let theNewJob = theJobs.filter(
                    (x, ind) => ind !== currentWork.index
                  );
                  await setJobs(theNewJob);
                  const newJobs = JSON.stringify(jobs);
                  await AsyncStorage.setItem("loads", newJobs);
                  setShowModal(false);
                } else {
                  BackHandler.exitApp();
                }
              }}
            >
              <Text style={WorksStyles.textbtnmodal}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={WorksStyles.btnmodal}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={WorksStyles.textbtnmodal}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <View
        style={{
          marginTop: StatusBar.currentHieght || 30,
          marginBottom: 60,
        }}
      >
        <HeadBar navigation={navigation} />

        <View style={{ height: "100%" }}>
          {show && (
            <DetailsOfWork
              setShow={setShow}
              image={image}
              navigation={navigation}
              jobs={jobs}
              setJobs={setJobs}
            />
          )}

          <View
            style={{
              marginBottom: 20,
              flex: 0.9,
            }}
          >
            <Text style={WorksStyles.headertext}>DAILY LOADS</Text>

            <View style={WorksStyles.headeritems}>
              <View style={WorksStyles.row1}>
                <Text style={WorksStyles.titleheader}>Tons or Load</Text>
              </View>

              <View style={WorksStyles.row2}>
                <Text style={WorksStyles.titleheader}>Product</Text>
              </View>

              <View style={WorksStyles.row3}>
                <Text style={WorksStyles.titleheader}>Ticket</Text>
              </View>

              <View style={WorksStyles.row4} />
            </View>

            <ScrollView>
              {jobs &&
                jobs.map((work, index) => (
                  <View key={index} style={WorksStyles.allitems}>
                    <View style={WorksStyles.row1}>
                      <Text style={WorksStyles.titletext}>
                        {work.TonsOrLoad}
                      </Text>
                    </View>

                    <View style={WorksStyles.row2}>
                      <Text style={WorksStyles.titletext}>{work.Product}</Text>
                    </View>

                    <View style={WorksStyles.row3}>
                      {/* <TouchableOpacity
                      onPress={() => setImageStyle({ width: 120, height: 180 })}
                    > */}
                      <Image
                        source={{ uri: work.Image }}
                        style={imageStyle}
                      ></Image>
                      {/* </TouchableOpacity> */}
                    </View>

                    <View style={WorksStyles.row4}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowModal(true);
                          setStatus("remove");
                          let theWork = work;
                          theWork.index = index;
                          setCurrentWork(theWork);
                        }}
                      >
                        <Icon name="delete-circle" size={30} color={"black"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </ScrollView>
          </View>

          <TheModal />

          <View style={WorksStyles.btnView}>
            <View style={WorksStyles.btn}>
              <TouchableOpacity onPress={onPress}>
                <Text style={WorksStyles.textbtn}>Add Load</Text>
              </TouchableOpacity>
            </View>
            <View style={WorksStyles.btn}>
              <TouchableOpacity
                onPress={() => {
                  setStatus("exit");
                  setShowModal(true);
                }}
              >
                <Text style={WorksStyles.textbtn}>End The Day</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default WorksPage;
