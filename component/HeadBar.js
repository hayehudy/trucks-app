import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Modal,
} from "react-native";
import IconPhone from "react-native-vector-icons/Feather";
import HeadBarStyles from "./HeadBarStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Iconmaterial from "react-native-vector-icons/MaterialCommunityIcons";

const HeadBar = () => {
const [showModal, setShowModal]=useState(false)

  const pressCall = () => {
    const url = "tel:123456789";
    Linking.openURL(url);
  };

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
  };

  const theModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={HeadBarStyles.modalView}>
          <Text style={HeadBarStyles.modaltext}>
            Do you want {"\n"}to switch users?{" "}
          </Text>

          <View style={HeadBarStyles.btnmodalView}>
            <TouchableOpacity
              style={HeadBarStyles.btnmodal}
              onPress={() => {
                clearAsyncStorage();
                navigation.navigate("LoginPage");
              }}
            >
              <Text style={HeadBarStyles.textbtnmodal}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={HeadBarStyles.btnmodal}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={HeadBarStyles.textbtnmodal}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <View style={HeadBarStyles.allitems}>
        <View style={HeadBarStyles.logout}>
          <TouchableOpacity
            style={HeadBarStyles.Button}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Iconmaterial name="logout" size={35} color={"red"} />
          </TouchableOpacity>
        </View>

        <View style={HeadBarStyles.logo}>
          <Image style={HeadBarStyles.image} source={require("./logo.png")} />
        </View>

        <View style={HeadBarStyles.call}>
          <TouchableOpacity onPress={pressCall} style={HeadBarStyles.iconphone}>
            <IconPhone
              name="phone-call"
              backgroundColor="transparent"
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        {theModal()}
      </View>
    </>
  );
};

export default HeadBar;
