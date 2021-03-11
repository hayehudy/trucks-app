import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LogInPage from "./pages/LoginPage/Login";
import StartPage from "./pages/StartPage/Start";
import DetailsPage from "./pages/DetailsPage/Details";
import WorksPage from "./pages/WorksPage/Works";
import makeCamera from "./component/MakeCamera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import Iconmaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

export default function App() {
  const Drawer = createDrawerNavigator();
  const [loadlogin, setloadlogin] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const valueemail = await AsyncStorage.getItem("email");
        const valuepassword = await AsyncStorage.getItem("password");
        JSON.parse(valueemail) === "a" && JSON.parse(valuepassword) === "1"
          ? setloadlogin(false)
          : Location.requestPermissionsAsync();
        Camera.requestPermissionsAsync();
      } catch (e) {
        // error reading value
      }
    })();
  }, []);

  const textDrawer = {
    fontWeight: "700",
    fontSize: 20,
    color: "#000",
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="LogInPage"
        drawerStyle={{
          backgroundColor: "#fff",
          marginTop: 150,
          marginBottom: 100,
          width: "60%",
          borderRadius: 25,
        }}
        drawerContentOptions={{
          activeBackgroundColor: "orange",
          labelStyle: textDrawer,
        }}
      >
        {loadlogin && (
          <Drawer.Screen
            name="LoginPage"
            component={LogInPage}
            options={{
              gestureEnabled: false,
              drawerLabel: () => null,
              // title: null,
              // drawerIcon: () => null,
              unmountOnBlur: true,
            }}
          />
        )}
        <Drawer.Screen
          name="StartPage"
          component={StartPage}
          options={{
            gestureEnabled: false,

            title: "Start",
            drawerIcon: ({ focused, size }) => (
              <Icon name="power-off" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="DetailsPage"
          component={DetailsPage}
          options={{
            gestureEnabled: false,
            headerLeft: null,
            gesturesEnabled: false,
            headerBackTitle: null,
            header: {
              visible: false,
            },
            title: "Details",
            drawerIcon: ({ focused, size }) => (
              <Iconmaterial name="card-text" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="WorksPage"
          component={WorksPage}
          options={{
            gestureEnabled: false,

            title: "Works",
            drawerIcon: ({ focused, size }) => (
              <Iconmaterial name="text-box-plus" size={30} />
            ),
          }}
        />

        <Drawer.Screen
          name="makeCamera"
          component={makeCamera}
          options={{
            gestureEnabled: false,
            drawerLabel: () => null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
