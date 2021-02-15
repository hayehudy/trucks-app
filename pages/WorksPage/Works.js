import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import WorksStyles from "./WorksStyles";
import HeadBar from "../../component/HeadBar"

const WorksPage = ({navigation}) => {    
    return (
      <>
        <View style={{marginTop: StatusBar.currentHieght || 30}}>
            <HeadBar navigation={navigation}/>
            <Text>WORKS</Text>
        </View>
      </>
    );
  };
  
  export default  WorksPage;