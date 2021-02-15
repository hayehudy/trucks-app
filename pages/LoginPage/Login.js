import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import LogInStyles from "./LogInStyles";
import HeadBar from "../../component/HeadBar"

const LogInPage = ({navigation}) => {
  return <>
    <View style={{marginTop: StatusBar.currentHieght || 30}}>
            <HeadBar navigation={navigation}/>
            <Text>LOGIN</Text>
    </View>
  </>;
};

export default LogInPage;
