import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import DetailsStyles from "./DetailsStyles";
import HeadBar from "../../component/HeadBar";
import { Picker } from "@react-native-picker/picker";
import DetailsPicker from "../../component/DetailsPicker";
import { useRoute } from "@react-navigation/native";

const DetailsPage = ({ navigation }) => {
  const route = useRoute();
  const [value, setValue] = useState();
  const [details, setDetails] = useState({});
  const options = {
    TrucksTypes: ["Citroen", "Fiat", "Ferrari", "Dodge"],
    Contractors: ["A", "B", "C", "D"],
    Customers: ["avraham", "ytzchak", "yaakov", "yosef"],
    Origins: ["#", "$", "%", "&"],
    Destinations: ["#", "$", "%", "&"],
    Cities: ["Jerusalem", "TelAviv", "Hayfa", "Ashdod"],
  };

  const onChangeText = (text) => {
    setValue(text);
    const obj = {};
    obj["TruckNumber"] = text;
    setDetails({ ...details, ...obj });
  };

  const onPress = () => {
    navigation.navigate("WorksPage", details);
  };

  return (
    <>
      {/* {console.log(details)} */}
      <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
        <HeadBar navigation={navigation} />
        <View style={{ alignItems: "center" }}>
          {/* <Text>DETAILS</Text> */}
          <Text style={{ marginTop: 10, color: "#003300" }}>TruckNumber</Text>
          <TextInput
            style={{
              width: 250,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <DetailsPicker
            theOption="TrucksTypes"
            detail="TruckType"
            options={options}
            details={details}
            setDetails={setDetails}
          />
          <DetailsPicker
            theOption="Contractors"
            detail="Contractor"
            options={options}
            details={details}
            setDetails={setDetails}
          />
          <DetailsPicker
            theOption="Customers"
            detail="Customer"
            options={options}
            details={details}
            setDetails={setDetails}
          />
          <DetailsPicker
            theOption="Origins"
            detail="Origin"
            options={options}
            details={details}
            setDetails={setDetails}
          />
          <DetailsPicker
            theOption="Destinations"
            detail="Destination"
            options={options}
            details={details}
            setDetails={setDetails}
          />
          <DetailsPicker
            theOption="Cities"
            detail="City"
            options={options}
            details={details}
            setDetails={setDetails}
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
              marginTop: 40,
              backgroundColor: "orange",
              borderRadius: 20,
              padding: 10,
              elevation: 2,
              width: 200,
            }}
            onPress={onPress}
          >
            <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DetailsPage;
