import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LogInPage from "./pages/LoginPage/Login";
import StartPage from "./pages/StartPage/Start";
import DetailsPage from "./pages/DetailsPage/Details";
import WorksPage from "./pages/WorksPage/Works";
import HeadBar from "./component/HeadBar";

export default function App() {
  const Drawer = createDrawerNavigator();
  function sss() {
    return (
      <Drawer.Navigator initialRouteName="LogInPage">
        <Drawer.Screen name="LoginPage" component={LogInPage} />
        <Drawer.Screen name="StartPage" component={StartPage} />
        <Drawer.Screen name="DetailsPage" component={DetailsPage} />
        <Drawer.Screen name="WorksPage" component={WorksPage} />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {sss()}
      {/* <Drawer.Navigator initialRouteName="LogInPage">
        <Drawer.Screen name="StartPage" component={StartPage} />
        <Drawer.Screen name="WorksPage" component={WorksPage} />
        <Drawer.Screen name="LoginPage" component={LogInPage} />
        <Drawer.Screen name="DetailsPage" component={DetailsPage} />
      </Drawer.Navigator> */}
    </NavigationContainer>

    // </View>
    // <View style={styles.container}>
    //   <Text style={{ fontSize: 40, color: "green" }}>
    //     trucks-app!!! כל הכבוד
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App;
