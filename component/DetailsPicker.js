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
      <Text
        style={{
          marginTop: 10,
          color: "#003300",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {detail}
      </Text>
      {/* <View
        style={{
          borderColor: "#000",
          backgroundColor: "#ffffff",
          borderWidth: 1,
          width: 250,
          borderRadius: 10,
          alignItems: "center",
        }}
      > */}
      <View style={Style.pickerWrapper}>
      <Icon
        name="arrow-drop-down"
        type="MaterialIcons"
        style={Style.pickerIcon}
      />
      <Picker
        mode="dropdown"
        style={Style.pickerContent}
        placeholder=""
        placeholderStyle={{ color: "white" }}
        placeholderIconColor={"white"}
        // <Picker
          selectedValue={details[detail]}
          // style={{
          //   width: "80%",
          //   height: 40,
          //   alignItems: "center",
          // }}
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

const Style = StyleSheet.create({
pickerWrapper: {
  borderRadius: 10,
  width: 250,
  height:40,
  borderColor: "#000000",
  borderWidth: 1,
  backgroundColor: "white",
  flexDirection:"row"
},
pickerIcon: {
  color: "red",
  position: "absolute",
  bottom: 15,
  right: 10,
  fontSize: 20,
  width: "10%"
},

pickerContent: {
  // width:"80%",
  color: "#000000",
  backgroundColor: "transparent",
  width: "90%"
},})
