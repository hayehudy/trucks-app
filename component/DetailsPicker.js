import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, Icon } from "native-base";

const DetailsPicker = (props) => {
  const { theOption, options, details, setDetails, detail } = props;
  const detailsObj = {};
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{marginTop:10,color: "#003300", fontSize: 15, fontWeight:"bold"}}>
        {detail}
      </Text>
      <View style={{
         borderColor: "#000",
         backgroundColor: "#ffffff",
         borderWidth: 2,
         width: 250,
         borderRadius: 20,
      }}>
      <Picker
        selectedValue={details[detail]}
        style={{
          width: "80%",
          height: 40,
        }}
        onValueChange={(itemValue, itemIndex) => {
          detailsObj[detail] = itemValue;
          setDetails({ ...details, ...detailsObj });
        }}
      >
        {options[theOption].map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
      </View> 
    </View>
  );
};
export default DetailsPicker;
