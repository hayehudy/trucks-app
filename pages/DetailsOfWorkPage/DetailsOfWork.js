import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import DetailsOfWorkStyles from "./DetailsOfWorkStyles";
import { Picker } from "@react-native-picker/picker";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MakeCamera from "../../component/MakeCamera";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsOfWork = (props) => {
  const { navigation } = props;
  const { setWorkPage, setCameraStart } = props;
  const { works, setWorks, setShow, image } = props;
  const products = ["apple", "banana", "egg"];
  const [theDetails, setTheDetails] = useState({});
  const [value, setValue] = useState();

  useEffect(() => {
    if (image) {
      const objDetails = {};
      objDetails.Image = image.uri;
      setTheDetails({ ...theDetails, ...objDetails });
    }
  }, [image]);

  const onChangeText = (text) => {
    setValue(text);
    const obj = {};
    obj["TonsOrLoad"] = text;
    setTheDetails({ ...theDetails, ...obj });
  };

  const onPress = () => {
    let theWorks = works;
    theWorks.push(theDetails);
    setWorks(theWorks);
    setShow(false);
  };

  const __startCamera = async () => {
    // setWorkPage(false);
    // setCameraStart(true)
    navigation.navigate("makeCamera");
  };

  return (
    <>
      <View style={DetailsOfWorkStyles.container}>
        <View style={DetailsOfWorkStyles.background}>
          <Text style={DetailsOfWorkStyles.headertext}>CURRENT LOAD</Text>

          <Text style={DetailsOfWorkStyles.titletext}>Tons or Load</Text>

          <TextInput
            style={DetailsOfWorkStyles.TextInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            numeric
            keyboardType={"numeric"}
          />

          <Text style={DetailsOfWorkStyles.titletext}>Product</Text>

          <View style={DetailsOfWorkStyles.picker}>
            <Picker
              style={{
                width: "80%",
                height: 50,
              }}
              dropdownIconColor={"red"}
              selectedValue={theDetails.Product}
              onValueChange={(itemValue, itemIndex) => {
                const detailsObj = {};
                detailsObj.Product = itemValue;
                setTheDetails({ ...theDetails, ...detailsObj });
              }}
            >
              {products.map((product, index) => (
                <Picker.Item label={product} value={product} key={index} />
              ))}
            </Picker>
          </View>

          <Text style={DetailsOfWorkStyles.titletext}>Add Ticket</Text>
          {image ? (
            <View>
              <Image
                source={{ uri: image.uri }}
                style={{ marginTop: 15, width: 80, height: 120 }}
              ></Image>
            </View>
          ) : (
            <TouchableOpacity
              style={DetailsOfWorkStyles.btnCamera}
              onPress={__startCamera}
            >
              <Icon
                name="camera"
                size={40}
                style={{ alignSelf: "center", marginTop: 3 }}
                color={"#000"}
              />
            </TouchableOpacity>
          )}

          <View style={DetailsOfWorkStyles.btnView}>
            <TouchableOpacity style={DetailsOfWorkStyles.btn} onPress={onPress}>
              <Text style={DetailsOfWorkStyles.btntext}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={DetailsOfWorkStyles.btn}
              onPress={() => {
                setShow(false);
              }}
            >
              <Text style={DetailsOfWorkStyles.btntext}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailsOfWork;
