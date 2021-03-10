import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import { Button, Icon } from "native-base";
import IconPhone from "react-native-vector-icons/Feather";
import HeadBarStyles from "./HeadBarStyles";

const HeadBar = () => {
  const pressCall = () => {
    const url = "tel:123456789";
    Linking.openURL(url);
  };

  return (
    <>
      <View style={{ backgroundColor: "orange", height: 60 }}>
        {/* <View>
          <Button
            style={HeadBarStyles.Button}
            onPress={() => navigation.toggleDrawer()}
            transparent
          >
            <Icon style={HeadBarStyles.Icon} name="menu" />
          </Button>
        </View> */}
        <View style={HeadBarStyles.logo}>
          <Image style={HeadBarStyles.image} source={require("./logo.png")} />
        </View>
        <View style={HeadBarStyles.call}>
          <IconPhone.Button
            name="phone-call"
            onPress={pressCall}
            style={HeadBarStyles.iconphone}
            backgroundColor="transparent"
            size={30}
            color="#000"
          />
        </View>
      </View>
    </>
  );
};

export default HeadBar;
