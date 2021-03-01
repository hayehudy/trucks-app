import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import { Button, Icon } from "native-base";

export default function MakeCamera({ startCamera, setStartCamera }) {
  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    }
  };

  let camera;
  async function takePicture() {
    if (camera) {
      const options = { quality: 1, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  return !startCamera ? (
    <View>
      <TouchableOpacity onPress={__startCamera}>
        <Icon name="camera"></Icon>
      </TouchableOpacity>
    </View>
  ) : (
    <Camera style={{ flex: 1, width: 300 }} ref={(ref) => (camera = ref)}>
      <TouchableOpacity onPress={takePicture}>
        <Text
          style={{
            width: 50,
            height: 50,
            borderRadius: 150,
            marginTop: 80,
            justifyContent: "center",
            backgroundColor: "#9400d3",
            borderColor: "black",
            borderWidth: 2,
            // elevation: 30,
          }}
        >
          {" "}
          Flip{" "}
        </Text>
      </TouchableOpacity>
    </Camera>
  );
}
