import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import LogInStyles from "./LoginStyles";
import HeadBar from "../../component/HeadBar";

const LogInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      {/* <HeadBar navigation={navigation} /> */}

      <View style={LogInStyles.container}>
        <Image style={LogInStyles.image} source={require("./logo.png")} />

        <View style={LogInStyles.inputView}>
          <TextInput
            style={LogInStyles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={LogInStyles.inputView}>
          <TextInput
            style={LogInStyles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={LogInStyles.loginBtn}
          onPress={() => {
            navigation.navigate("StartPage");
          }}
        >
          <Text style={LogInStyles.loginText} fontSize={30}>
            כניסה
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInPage;
