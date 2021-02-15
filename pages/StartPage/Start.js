import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import StartStyles from "./StartStyles";
import HeadBar from "../../component/HeadBar"

const StartPage = ({navigation}) => {    
    return (
      <>
        <View style={{marginTop: StatusBar.currentHieght || 30}}>
            <HeadBar navigation={navigation}/>
            <Text>START</Text>
        </View>
      </>
    );
  };
  
  export default StartPage;