import React, { useState } from "react";
import {
    ScrollView,
    Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,  
  Alert,
} from "react-native";
import DaySummaryStyles from "./DaySummaryStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

const DaySummary = ({jobs, setJobs, startTime, endTime, details})=>{
  const [currentWork, setCurrentWork] = useState({});
    const [showModal,setShowModal]=useState(false);
    const [status,setStatus]=useState();
    const [imageStyle, setImageStyle] = useState({
        width: 50,
        height: 60,
        marginTop: -15,
      });

      

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
            <View style={DaySummaryStyles.modalView}>
              {status === "remove" ? (
                <Text style={DaySummaryStyles.modaltext}>
                  Tons or Load - {currentWork.TonsOrLoad},{"\n"}Product -
                  {currentWork.Product} {"\n"}
                  Remove this row?
                </Text>
              ) : (
                <Text style={DaySummaryStyles.modaltext}>
                  Are you sure you want to end the Job?
                </Text>
              )}
              <View style={DaySummaryStyles.btnmodalView}>
                <TouchableOpacity
                  style={DaySummaryStyles.btnmodal}
                  onPress={async () => {
                    if (status === "remove") {
                      let theJobs=jobs;
                      let theNewJob=theJobs.filter((x,ind)=>ind !== currentWork.index);
                      await setJobs(theNewJob);
                      const newJobs=JSON.stringify(jobs);
                      await AsyncStorage.setItem("loads",newJobs);
                      setShowModal(false);
                    } else {
                      await AsyncStorage.removeItem("loads");
                      await AsyncStorage.removeItem("details");
                      await Updates.reloadAsync();
                      // setShowModal(false);
                    }
                  }}
                >
                  <Text style={DaySummaryStyles.textbtnmodal}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={DaySummaryStyles.btnmodal}
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <Text style={DaySummaryStyles.textbtnmodal}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        );
      };

    return(
        <View style={DaySummaryStyles.container}>
          <Text style={DaySummaryStyles.headertext}>THE DETAILS</Text>
            <Text style={{fontWeight:"bold"}}>Time of start:{startTime}</Text>
            <Text style={{fontWeight:"bold"}}>Time of End:{endTime}</Text>
            <Text style={{fontWeight:"bold"}}>Truck number: {details.TruckNumber}</Text>
            <Text style={{fontWeight:"bold"}}>Truck type: {details.TruckType}</Text>
            <Text style={{fontWeight:"bold"}}>Contractor: {details.Contractor}</Text>
            <Text style={{fontWeight:"bold"}}>Origin:{details.Origin}</Text>
            <Text style={{fontWeight:"bold"}}>Destination:{details.Destination}</Text>
            <Text style={{fontWeight:"bold"}}>City:{details.City}</Text>

            <View
            style={{
              marginBottom: 20,
              flex: 0.9,
            }}
          >
            <Text style={DaySummaryStyles.headertext}>DAILY LOADS</Text>

            <View style={DaySummaryStyles.headeritems}>
                <View style={DaySummaryStyles.row1}>
                    <Text style={DaySummaryStyles.titleheader}>Tons or Load</Text>
                </View>

                <View style={DaySummaryStyles.row2}>
                    <Text style={DaySummaryStyles.titleheader}>Product</Text>
                </View>

                <View style={DaySummaryStyles.row3}>
                    <Text style={DaySummaryStyles.titleheader}>Ticket</Text>
                </View>

                <View style={DaySummaryStyles.row4} />
                </View>
            <ScrollView>
              {jobs&&jobs.map((work, index) => (
                <View key={index} style={DaySummaryStyles.allitems}>
                  <View style={DaySummaryStyles.row1}>
                    <Text style={DaySummaryStyles.titletext}>{work.TonsOrLoad}</Text>
                  </View>

                  <View style={DaySummaryStyles.row2}>
                    <Text style={DaySummaryStyles.titletext}>{work.Product}</Text>
                  </View>

                  <View style={DaySummaryStyles.row3}>
                    {/* <TouchableOpacity
                      onPress={() => setImageStyle({ width: 120, height: 180 })}
                    > */}
                    <Image
                      source={{ uri: work.Image }}
                      style={imageStyle}
                    ></Image>
                    {/* </TouchableOpacity> */}
                  </View>

                  <View style={DaySummaryStyles.row4}>
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

            <View style={DaySummaryStyles.btn}>
              <TouchableOpacity
                onPress={() => {
                  setStatus("exit");
                  setShowModal(true);
                }}
              >
                <Text style={DaySummaryStyles.textbtn}>End The Job?</Text>
              </TouchableOpacity>
            </View>
        
        </View>
    )
}

export default DaySummary;