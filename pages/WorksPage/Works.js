import { StatusBar } from "expo-status-bar";
import WorksStyles from "./WorksStyles";
import HeadBar from "../../component/HeadBar";
import React from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

const WorksPage = ({ navigation }) => {
  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <Text>WORKS</Text>
    </View>
  );
};

export default WorksPage;
