import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LogInPage from "./pages/LoginPage/Login";
import StartPage from "./pages/StartPage/Start";
import DetailsPage from "./pages/DetailsPage/Details";
import WorksPage from "./pages/WorksPage/Works";
import MakeCamera from "./component/MakeCamera";
import SendLocation from "./pages/send location/sendLocation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import Iconmaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

export default function App() {
  // const Drawer = createDrawerNavigator();
  const [loadlogin, setloadlogin] = useState(true);
  const [start, setStart] = useState(false);
  const [detailsPage, setDetailsPage] = useState(false);
  const [worksPage, setWorkPage] = useState(false);
  const [cameraStart,setCameraStart]=useState(false);
  const [theCapturedImage,setTheCapturedImage]=useState();
  const Stack = createStackNavigator();

  useEffect(() => {
    (async () => {
      try {
        const valueemail = await AsyncStorage.getItem("email");
        const valuepassword = await AsyncStorage.getItem("password");
        if(JSON.parse(valueemail) === "a" && JSON.parse(valuepassword) === "1")
          {setloadlogin(false) ;setStart(true)}
          else {Location.requestPermissionsAsync();
        Camera.requestPermissionsAsync();}
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

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
  };

  return (
    <View>
    {loadlogin&&<LogInPage setStart={setStart} setloadlogin={setloadlogin}/>}
    {start&&<StartPage setDetailsPage={setDetailsPage} setStart={setStart} setloadlogin={setloadlogin}/>}
    {detailsPage&&<DetailsPage setDetailsPage={setDetailsPage} setWorkPage={setWorkPage} setloadlogin={setloadlogin}/>}
    {worksPage&&<WorksPage setCameraStart={setCameraStart} setWorkPage={setWorkPage} theCapturedImage={theCapturedImage} setloadlogin={setloadlogin}/>}
    {cameraStart&&<MakeCamera setCameraStart={setCameraStart} setWorkPage={setWorkPage} setTheCapturedImage={setTheCapturedImage}/>}
  </View>
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen name="MakeCamera" component={MakeCamera} />
  // </Stack.Navigator>
  // </NavigationContainer>
    )}
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="LogInPage"
    //     drawerContent={(props) => {
    //       return(
           
  //         return (
  //           <DrawerContentScrollView {...props}>
  //             <DrawerItemList {...props} />
  //             <View style={{ marginTop: 100 }}>
  //               <DrawerItem
  //                 label="Log out"
  //                 onPress={async () => {
  //                   await setloadlogin(true);
  //                   clearAsyncStorage();
  //                   props.navigation.navigate("LoginPage");
  //                 }}
  //                 drawerStyle={{
  //                   activeBackgroundColor: "orange",
  //                   labelStyle: textDrawer,
  //                 }}
  //                 icon={() => (
  //                   <Iconmaterial name="logout" size={30} color={"red"} />
  //                 )}
  //                 labelStyle={{
  //                   color: "red",
  //                   fontWeight: "700",
  //                   fontSize: 20,
  //                 }}
  //               />
  //             </View>
  //           </DrawerContentScrollView>
  //         );
  //       }}
  //       drawerStyle={{
  //         backgroundColor: "#fff",
  //         marginTop: 150,
  //         marginBottom: 100,
  //         width: "60%",
  //         borderRadius: 25,
  //       }}
  //       drawerContentOptions={{
  //         activeBackgroundColor: "orange",
  //         labelStyle: textDrawer,
  //       }}
  //     >
  //       {loadlogin && (
  //         <Drawer.Screen
  //           name="LoginPage"
  //           component={LogInPage}
  //           options={{
  //             gestureEnabled: false,
  //             drawerLabel: () => null,
  //             // title: null,
  //             // drawerIcon: () => null,
  //             unmountOnBlur: true,
  //           }}
  //         />
  //       )}
  //       <Drawer.Screen
  //         name="StartPage"
  //         component={StartPage}
  //         options={{
  //           title: "Start",
  //           drawerIcon: ({ focused, size }) => (
  //             <Icon name="power-off" size={30} />
  //           ),
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="DetailsPage"
  //         component={DetailsPage}
  //         options={{
  //           title: "Details",
  //           drawerIcon: ({ focused, size }) => (
  //             <Iconmaterial name="card-text" size={30} />
  //           ),
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="WorksPage"
  //         component={WorksPage}
  //         options={{
  //           title: "Works",
  //           drawerIcon: ({ focused, size }) => (
  //             <Iconmaterial name="text-box-plus" size={30} />
  //           ),
  //         }}
  //       />

  //       <Drawer.Screen
  //         name="makeCamera"
  //         component={makeCamera}
  //         options={{
  //           gestureEnabled: false,
  //           drawerLabel: () => null,
  //         }}
  //       />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );

