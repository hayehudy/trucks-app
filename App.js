import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LogInPage from "./pages/LoginPage/Login";
import StartPage from "./pages/StartPage/Start";
import DetailsPage from "./pages/DetailsPage/Details";
import WorksPage from "./pages/WorksPage/Works";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: "green" }}>
        trucks-app!!! כל הכבוד
      </Text>
      <StatusBar style="auto" />
    </View>
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
