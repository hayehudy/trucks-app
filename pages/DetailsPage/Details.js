import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import DetailsStyles from "./DetailsStyles";
import HeadBar from "../../component/HeadBar";

const DetailsPage = ({ navigation }) => {
  return (
    <>
      <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
        <HeadBar navigation={navigation} />
        <Text>DETAILS</Text>
      </View>
    </>
  );
};

export default DetailsPage;
