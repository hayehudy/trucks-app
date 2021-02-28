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

const DetailsPicker = (props) => {
  const { theOption, options, details, setDetails, detail } = props;
  const detailsObj = {};
  return (
    <View>
      <Text style={{ marginTop: 10, color: "red" }}>{detail}</Text>
      <Picker
        selectedValue={details[detail]}
        style={{ width: 200, height: 50 }}
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
  );
};
export default DetailsPicker;
