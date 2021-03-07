import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import LogInStyles from "./LoginStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogInPage = ({ navigation }) => {
  const [login, setLogin] = useState(true);
  const [messageAccess, setMessageAccess] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const valueemail = await AsyncStorage.getItem("email");
    //     const valuepassword = await AsyncStorage.getItem("password");
    //     JSON.parse(valueemail) === "א" && JSON.parse(valuepassword) === "1"
    //       ? setloadlogin(false)
    //       : null;
    //   } catch (e) {
    //     // error reading value
    //   }
    // })();
    setLogin(true);
  }, []);

  // const validation = () => {
  //   // setPagelogin(false);
  //   // setpagedrawer(true);
  //   navigation.navigate("StartPage");
  // };

  const valueemail = async (valueemail) => {
    try {
      const email = JSON.stringify(valueemail);
      await AsyncStorage.setItem("email", email);
      // console.log(`
      // email - ${email}`);
    } catch (e) {
      // saving error
    }
  };

  const valuepassword = async (valuepassword) => {
    try {
      const password = JSON.stringify(valuepassword);
      await AsyncStorage.setItem("password", password);
      // console.log(`
      // password - ${password}`);
    } catch (e) {
      // saving error
    }
  };

  const validation = async () => {
    try {
      const valueemail = await AsyncStorage.getItem("email");
      const valuepassword = await AsyncStorage.getItem("password");
      // console.log(valueemail);
      // console.log(valuepassword);
      JSON.parse(valueemail) === "a" && JSON.parse(valuepassword) === "1"
        ? access()
        : err();
    } catch (e) {
      // error reading value
    }
  };

  const access = () => {
    setMessageAccess(true);
    setLogin(false);
    setTimeout(() => {
      navigation.navigate("StartPage");
    }, 1000);
  };

  const err = () => {
    setMessageErr(true);
    setLogin(false);
  };

  return (
    <View style={{ marginTop: StatusBar.currentHieght || 30 }}>
      <View style={LogInStyles.container}>
        <Image style={LogInStyles.image} source={require("./logo.png")} />

        {login && (
          <View style={LogInStyles.login}>
            <View style={LogInStyles.inputView}>
              <TextInput
                style={LogInStyles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={valueemail}
              />
            </View>

            <View style={LogInStyles.inputView}>
              <TextInput
                style={LogInStyles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={valuepassword}
              />
            </View>

            <TouchableOpacity
              style={LogInStyles.loginBtn}
              onPress={() => {
                validation();
              }}
            >
              <Text style={LogInStyles.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        )}

        {messageAccess && (
          <View style={LogInStyles.message}>
            <Text style={LogInStyles.messagetext}>
              {" "}
              you have successfully{"\n"}connected
            </Text>
          </View>
        )}

        {messageErr && (
          <View style={LogInStyles.message}>
            <Text style={LogInStyles.messagetext}>
              The email or password{"\n"}is incorrect
            </Text>
            <TouchableOpacity
              style={LogInStyles.errBtn}
              onPress={() => {
                setMessageErr(false);
                setLogin(true);
              }}
            >
              <Text style={LogInStyles.loginText}>cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default LogInPage;
