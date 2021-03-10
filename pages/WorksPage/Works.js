import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert,
  Modal,
  Image,
  BackHandler
} from "react-native";
import { StatusBar } from "expo-status-bar";
import WorksStyles from "./WorksStyles";
import HeadBar from "../../component/HeadBar";
import DetailsOfWork from "../DetailsOfWorkPage/DetailsOfWork";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WorksPage = ({setCameraStart, setWorkPage,theCapturedImage}) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [works, setWorks] = useState([]);
  const [status, setStatus] = useState();
  const [loads, setLoads] = useState();
  const [currentWork, setCurrentWork] = useState({});
  // const details = route.params;
  const capturedImage = theCapturedImage;
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

  // useEffect(()=>{async()=>{
  //   const theLoads=await AsyncStorage.getItem("loads");
  //   if (!theLoads){
  //   const loadsArr = JSON.stringify([]);
  //   await AsyncStorage.setItem("loads", loadsArr);}
  //   else {const theWorks=JSON.stringify(works);
  //   await AsyncStorage.setItem("loads", theWorks)}}
  // },[works])

  // const getLoads=async()=>{
  //   const theLoads=await AsyncStorage.getItem("loads");
  //   setLoads(JSON.parse(theLoads))
  // }

  const onPress = () => {
    setShow(true);
    setImage();
  };

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
          {status==="remove"?
          (<Text style={WorksStyles.modaltext}>
            Tons or Load - {currentWork.TonsOrLoad},{"\n"}Product -
            {currentWork.Product} {"\n"}
            Remove this row?
          </Text>):(<Text style={WorksStyles.modaltext}>Are you sure you want to exit the app?</Text>)}
          <View style={WorksStyles.btnmodalView}>
          
            <TouchableHighlight
              style={WorksStyles.btnmodal}
              onPress={() => {
                if (status==="remove"){
                let theWorks = works;
                let theNewWorks = theWorks.filter(
                  (x, ind) => ind !== currentWork.index
                );
                setWorks(theNewWorks);
                setShowModal(false)}
                  else {BackHandler.exitApp()}
              }}
            >
              <Text style={WorksStyles.textbtnmodal}>Yes</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={WorksStyles.btnmodal}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={WorksStyles.textbtnmodal}>No</Text>
            </TouchableHighlight>
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
        }}
      >
        <HeadBar/>

        <View style={{ height: "100%" }}>
          {show && (
            <DetailsOfWork
              works={works}
              setWorks={setWorks}
              setShow={setShow}
              image={image}
              setCameraStart={setCameraStart}
              setWorkPage={setWorkPage}
              // navigation={navigation}
            />
          )}

          <View
            style={{
              marginBottom: 20,
              flex: 0.8,
            }}
          >
            <Text style={WorksStyles.headertext}>DAYLY LOADS</Text>

            <View style={WorksStyles.headeritems}>
              <View style={WorksStyles.row1}>
                <Text style={WorksStyles.titleheader}>Tons or Load</Text>
              </View>

              <View style={WorksStyles.row2}>
                <Text style={WorksStyles.titleheader}>Product</Text>
              </View>

              <View style={WorksStyles.row3}>
                <Icon name="camera" size={30} color={"#000"} />
              </View>

              <View style={WorksStyles.row4} />
            </View>

            <ScrollView>
              {works.map((work, index) => (
                <View key={index} style={WorksStyles.allitems}>
                  <View style={WorksStyles.row1}>
                    <Text style={WorksStyles.titletext}>{work.TonsOrLoad}</Text>
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

          <TheModal/>

          <View>
            <TouchableOpacity style={WorksStyles.btn} onPress={onPress}>
              <Text style={WorksStyles.textbtn}>Add Load</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={WorksStyles.btn} onPress={()=>{setStatus("exit"); setShowModal(true)}}>
              <Text style={WorksStyles.textbtn}>End The Day</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </>
  );
};

export default WorksPage;
