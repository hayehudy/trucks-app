import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import sendLocationStyle from "./sendLocationStyle";
import HeadBar from "../../component/HeadBar";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const sendLocation = ({ navigation }) => {
  const [send, setSend] = useState([]);

  const data = async () => {
    // let location = await Location.getCurrentPositionAsync({});
    // let Lat = location.coords.latitude;
    // let Lng = location.coords.longitude;
    // let time2 = `${new Date().getHours()}:${
    //   new Date().getMinutes() < 10
    //     ? "0" + new Date().getMinutes()
    //     : new Date().getMinutes()
    // }:${new Date().getSeconds()}`;
    // setSend((send) => [...send, { time: time2, Lat: Lat, Lng: Lng }]);
  };

  const storagelocation = async () => {
    const getstorage = await AsyncStorage.getItem("location");
    const locationparse = await JSON.parse(getstorage);
    setSend(locationparse);

    console.log("sendLocation", locationparse);
  };

  console.log("state", send.length);
  // const storagelocation = async () => {
  //   // let theStartTime = JSON.stringify(send);

  //   // await AsyncStorage.setItem("location", theStartTime);
  // };

  useEffect(() => {
    setInterval(() => {
      storagelocation();
      // firstTime();
    }, 10000);

    // setSend(theJobs);
    // storagelocation();
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     data();
  //   }, 3000);
  // }, []);
  // console.log(send.length);

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <HeadBar navigation={navigation} />
      <ScrollView>
        <View style={{ marginTop: 30, marginLeft: 15, marginBottom: 50 }}>
          <TouchableOpacity onPress={storagelocation}>
            <Text>get storage</Text>
          </TouchableOpacity>

          {send.map((work, index) => (
            <Text key={index} style={{ fontSize: 15 }}>
              {`time:  ${work.time}     Location:  ${work.Lat}  -  ${work.Lng}`}{" "}
              {"\n"}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default sendLocation;

// import React, { useState, useEffect } from "react";
// import { Platform, Text, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";
// import * as Location from "expo-location";

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === "android" && !Constants.isDevice) {
//         setErrorMsg(
//           "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
//         );
//         return;
//       }
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{text}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: "center",
//   },
// });
