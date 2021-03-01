import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LogInPage from "./pages/LoginPage/Login";
import StartPage from "./pages/StartPage/Start";
import DetailsPage from "./pages/DetailsPage/Details";
import WorksPage from "./pages/WorksPage/Works";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const Drawer = createDrawerNavigator();
  const [loadlogin, setloadlogin] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const valueemail = await AsyncStorage.getItem("email");
        const valuepassword = await AsyncStorage.getItem("password");
        JSON.parse(valueemail) === "א" && JSON.parse(valuepassword) === "1"
          ? setloadlogin(false)
          : null;
      } catch (e) {
        // error reading value
      }
    })();
  }, []);

  const textDrawer = {
    color: "red",
    fontWeight: "700",
    fontSize: 20,
  };

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="LogInPage"
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Logout"
                onPress={async () => {
                  await setloadlogin(true);
                  clearAsyncStorage();
                  props.navigation.navigate("LoginPage");
                }}
              />
            </DrawerContentScrollView>
          );
        }}
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
        <Drawer.Screen
          name="WorksPage"
          component={WorksPage}
          options={{ title: "Works" }}
        />

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
            title: "Start",
            drawerIcon: ({ focused, size }) => (
              <Icon name="power-off" size={25} color={"red"} />
            ),
          }}
        />
        <Drawer.Screen
          name="DetailsPage"
          component={DetailsPage}
          options={{ title: "Details" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
