import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import {
    Button,
    Icon,
  } from "native-base";

const HeadBar = ({navigation}) => {
  return <>
    <View style={{backgroundColor:"orange"}}>
        <Button onPress={() => navigation.toggleDrawer()} transparent>
          <Icon name='menu' />
        </Button>
    </View>
  </>;
};

export default HeadBar;
