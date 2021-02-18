import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import WorksStyles from "./WorksStyles";
import HeadBar from "../../component/HeadBar"
import { useState } from "react/cjs/react.development";
import DetailsOfWork from "../DetailsOfWorkPage/DetailsOfWork";

// מסך 4
// לחצן – חדש
// נפתח חלונית משקל פרודקט תמונה
// לחצן שמירה שסוגר את החלון 
// מתווסף שורה במסך + לחצן תיקון (יפתח חלונית עם הנתונים הקיימים) + לחצן מחיקה (יפתח חלונית אישור)
// לחצן “End Day

const WorksPage = ({route, navigation}) => { 
    const [show,setShow]=useState(false);
    const [works,setWorks]=useState([])
    const details=route.params;
    const onPress=()=>{
      setShow(true)
    }   
    return (
      <>
        <View style={{marginTop: StatusBar.currentHieght || 30}}>
            <HeadBar navigation={navigation}/>
            <Text>WORKS</Text>
            {show && (<DetailsOfWork works={works} setWorks={setWorks} setShow={setShow} />)}
            {works.map((work)=>(
            <View>
            <Text>Tons or Load:{work.TonsOrLoad}, Product:{work.Product}</Text>
            </View>
            ))}
            <TouchableOpacity onPress={onPress}>
                <Text style={{marginTop:50,color:"red"}}>New Work</Text>
            </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default  WorksPage;