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

  const theModal=()=>{
    return(
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
                    style={{ ...WorksStyles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      let theWorks = works;
                      let theNewWorks = theWorks.filter((x, ind) => 
                        ind !== currentWork.index
                      );
                      setWorks(theNewWorks);
                      setShowModal(false);
                    }}
                  >
                    <Text style={WorksStyles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{ ...WorksStyles.openButton, backgroundColor: "#2196F3" }}
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
    )
  }

  return (
    <>
      <View style={{marginTop: StatusBar.currentHieght || 30}}>
        <HeadBar navigation={navigation} />
        
        <Text style={{marginBottom:20, color:"blue", alignSelf:"center"}}>THE WORKS</Text>
        {/* <View style={{position:"absolute", zIndex:2000}} > */}
        {show && (
          <DetailsOfWork works={works} setWorks={setWorks} setShow={setShow} />
        )}
        {/* </View> */}
        <View>
        {works.map((work, index) => (
          <View key={index} style={{alignSelf:"center", flexDirection:"row"}} >
            <Text style={{flex:6}}>
              Tons or Load:{work.TonsOrLoad}, Product:{work.Product}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
                let theWork = work;
                theWork.index = index;
                setCurrentWork(theWork);
              }}
              style={{borderRadius:10, borderWidth:2, borderColor:"#003366", flex:1}}
            >
              <Text style={{ color: "red", backgroundColor: "yellow" }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
        
        {theModal()}
       
        <TouchableOpacity style={{alignSelf:"center",alignItems:"center", marginTop: 40,backgroundColor: "#00ff00",borderRadius: 20,width:100, height:20}} onPress={onPress}>
          <Text style={{color: "red" }}>New Work</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default WorksPage;




