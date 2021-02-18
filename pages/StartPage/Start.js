import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartStyles from "./StartStyles";
import HeadBar from "../../component/HeadBar";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const StartPage = ({ navigation }) => {
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState(null);
  const [textLocation, setTextLocation] = useState("");
  const [map, setMap] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let textlocation = "Waiting..";
  if (errorMsg) {
    textlocation = errorMsg;
  } else if (location) {
    textlocation = JSON.stringify(
      // location
      `קו רוחב  ${location.coords.latitude} קו אורך  ${location.coords.longitude}`
    );
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
  }
  const mapview = (
    <MapView
      style={{ height: 150, width: 300 }}
      initialRegion={{
        // latitude: 31.8800332,
        // longitude: 35.2398698,
        latitude: latitude,
        longitude: longitude,
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

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <View style={StartStyles.container}>
        <TouchableOpacity
          style={StartStyles.loginBtn}
          onPress={() => {
            setStartTime(`${days[new Date().getDay()]}     ${
              date < 10 ? "0" + date : date
            }/${
              month < 10 ? "0" + month : month
            }/${new Date().getFullYear()}     ${
              hours < 10 ? "0" + hours : hours
            }:${
              minutes < 10 ? "0" + minutes : minutes
            }:${new Date().getSeconds()}
              `);
            setTextLocation(textlocation);
            setMap(mapview);
          }}
        >
          <Text style={StartStyles.loginText} fontSize={30}>
            Start{"\n"}The{"\n"}Day
          </Text>
        </TouchableOpacity>
        <Text>
          {"\n"}
          {"\n"}
          {startTime} {textLocation}
        </Text>
        {map}
      </View>
    </View>
  );
};

export default StartPage;
