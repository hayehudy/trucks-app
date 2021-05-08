import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartStyles from "./StartStyles";
import HeadBar from "../../component/HeadBar";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundTask from "react-native-background-task";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const StartPage = ({ navigation }) => {
  const [startTime, setStartTime] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [textLocation, setTextLocation] = useState("");
  const [map, setMap] = useState();

  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  // BackgroundTask.define(async () => {
  //   let location = await Location.getCurrentPositionAsync({});
  //   let Lat = "location.coords.latitude";
  //   await AsyncStorage.setItem("Lat", Lat);
  //   BackgroundTask.finish();
  // });

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  let textlocation = `latitude  ${latitude} longitude  ${longitude}`;

  const mapview = (
    <MapView
      style={{ height: 350, width: 300 }}
      language="en"
      initialRegion={{
        // latitude: 31.8800332,
        // longitude: 35.2398698,
        latitude: latitude ? latitude : 0,
        longitude: longitude ? longitude : 0,
        latitudeDelta: 0.00292,
        longitudeDelta: 0.00242,
      }}
    >
      <Marker
        coordinate={{
          latitude: latitude ? latitude : 0,
          longitude: longitude ? longitude : 0,
        }}
      />
    </MapView>
  );

  // const sendLocation = ({ navigation }) => {
  // const [send, setSend] = useState([]);

  // const data = async () => {
  //   let location = await Location.getCurrentPositionAsync({});
  //   let Lat = location.coords.latitude;
  //   let Lng = location.coords.longitude;
  //   let time2 = `${new Date().getHours()}:${
  //     new Date().getMinutes() < 10
  //       ? "0" + new Date().getMinutes()
  //       : new Date().getMinutes()
  //   }:${new Date().getSeconds()}`;
  //   setSend((send) => [...send, { time: time2, Lat: Lat, Lng: Lng }]);

  //   let theSsendLocation = JSON.stringify(send);
  //   await AsyncStorage.setItem("location", theSsendLocation);
  // };

  // const storagelocation = async () => {
  //   const getstorage = await AsyncStorage.getItem("location");
  //   const locationparse = await JSON.parse(getstorage);
  //   console.log("getItem start", locationparse);
  // };

  // useEffect(() => {
  //   data();
  //   storagelocation();
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     data();
  //     storagelocation();
  //   }, 10000);
  // }, []);
  // console.log(send.length);

  const onPress = async () => {
    await setStartTime(`${days[new Date().getDay()]}     ${
      date < 10 ? "0" + date : date
    }/${
      month < 10 ? "0" + month : month
    }/${new Date().getFullYear().toString().substr(-2)}     ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}
    `);
    let theStartTime = JSON.stringify(`${days[new Date().getDay()]}     ${
      date < 10 ? "0" + date : date
    }/${
      month < 10 ? "0" + month : month
    }/${new Date().getFullYear().toString().substr(-2)}     ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}
    `);
    await AsyncStorage.setItem("startTime", theStartTime);

    let timenumjob = JSON.stringify(`${date < 10 ? "0" + date : date}${
      month < 10 ? "0" + month : month
    }${new Date().getFullYear().toString().substr(-2)}${
      hours < 10 ? "0" + hours : hours
    }${minutes < 10 ? "0" + minutes : minutes}
    `);
    await AsyncStorage.setItem("timenumjob", timenumjob);
    // setTextLocation(textlocation);
    // setMap(mapview);
    navigation.navigate("DetailsPage");
  };

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <View style={StartStyles.container}>
        <TouchableOpacity onPress={onPress} style={StartStyles.Btnstart}>
          <Text style={StartStyles.loginText}>Start Job</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem("location");
          }}
          style={StartStyles.Btnstart1}
        >
          <Text style={StartStyles.loginText}>remove storage</Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={{ marginTop: 30, marginLeft: 15, marginBottom: 120 }}>
            {send.map((work, index) => (
              <Text key={index} style={{ fontSize: 15 }}>
                {`time:  ${work.time}     Location:  ${work.Lat}  -  ${work.Lng}`}{" "}
                {"\n"}
              </Text>
            ))}
          </View>
        </ScrollView> */}
        {/* <Text>
          {"\n"}
          {startTime}
          {textLocation}
        </Text> */}
        {/* {map} */}
      </View>
    </View>
  );
};

export default StartPage;
