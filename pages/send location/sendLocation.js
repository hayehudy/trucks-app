import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import sendLocationStyle from "./sendLocationStyle";
import HeadBar from "../../component/HeadBar";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const sendLocation = ({ navigation }) => {
  const [startTime, setStartTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [textLocation, setTextLocation] = useState("");
  const [map, setMap] = useState();
  const [cartproduct, setCartproduct] = useState([]);
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

  // useEffect(() => {
  //   (async () => {
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLatitude(location.coords.latitude);
  //     setLongitude(location.coords.longitude);
  //   })();
  // }, []);

  let textlocationaa = `קו רוחב  ${latitude} קו אורך  ${longitude}`;

  // const coordinates = async () => {
  //   let location = await Location.getCurrentPositionAsync({});
  //   setLatitude(location.coords.latitude);
  //   setLongitude(location.coords.longitude);
  // };

  useEffect(() => {
    setStartTime(`${days[new Date().getDay()]}     ${
      date < 10 ? "0" + date : date
    }/${month < 10 ? "0" + month : month}/${new Date().getFullYear()}     ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}
  `);

    setInterval(() => {
      async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setTextLocation(textlocationaa);
      };
    }, 3000);
  }, []);

  const aaa = async () => {
    await setCartproduct([
      ...cartproduct,
      {
        a: startTime,
        b: textLocation,
        // c: { map },
      },
    ]);
  };

  const as = () => {
    setInterval(() => {
      <Text>{startTime}</Text>;
    }, 3000);
  };
  {
    setInterval(() => {
      {
        new Date();
      }
    }, 3000);
  }

  const mapview = (
    <MapView
      style={{ height: 150, width: 300 }}
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

  const onPress = () => {
    setStartTime(`${days[new Date().getDay()]}     ${
      date < 10 ? "0" + date : date
    }/${month < 10 ? "0" + month : month}/${new Date().getFullYear()}     ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}
  `);
    // setTextLocation(textlocation);
    // setMap(mapview);
  };

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <View style={sendLocationStyle.container}>
        <Text>
          {"\n"}
          sssss
          {startTime}
          {textLocation}
        </Text>
        {/* <TouchableOpacity onPress={onPress}>
          <Text>vvvvv</Text>
        </TouchableOpacity> */}

        {map}
      </View>
      {cartproduct.map((work, index) => (
        <View key={index}>
          <View style={{ height: 50, width: 300 }}>
            <Text>{work.a}</Text>
            <Text>{work.b}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default sendLocation;
