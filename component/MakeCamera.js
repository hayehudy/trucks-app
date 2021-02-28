import React, { useEffect, useState,useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { Button, Icon } from "native-base";
import { StatusBar } from "expo-status-bar";

export default function MakeCamera({startCamera, setStartCamera}) {
  // const [camera, setCamera] = useState({
  //   hasCameraPermission: null
  // });
  const cameraRef = useRef(null);
  // const [startCamera,setStartCamera]=useState(false);

  const __startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } 
  }

  // useEffect(() => {
  //   async function status (){
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
  //   setCamera(prevState => ({ ...prevState, hasCameraPermission: status === 'granted'}));}
  //     status()
  // }, []);

  
  
    return (
      !startCamera?
      (<View>
        <TouchableOpacity
        onPress={__startCamera}>
          <Icon name="camera"></Icon>
        </TouchableOpacity>
      </View>):
      (<View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} ref = {cameraRef}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
          </View>
        </Camera>
      </View>
    ))
  
}
