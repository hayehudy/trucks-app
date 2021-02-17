import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import DetailsStyles from "./DetailsStyles";
import HeadBar from "../../component/HeadBar";
import {Picker} from '@react-native-picker/picker';
import DetailsPicker from "../../component/DetailsPicker"

const DetailsPage = ({navigation}) => {
    const [value,setValue]=useState()
    const [details,setDetails]=useState({});
    const options={ TrucksTypes:["Citroen", "Fiat", "Ferrari", "Dodge"],
                    Contractors: ["A","B","C","D"],
                    Customers:["avraham","ytzchak","yaakov","yosef"],
                    Origins:["#","$","%","&"],
                    Destinations:["#","$","%","&"],
                    Cities:["Jerusalem","TelAviv","Hayfa","Ashdod"]} ;
    
    const onChangeText=(text)=>{
        setValue(text);
        const obj={};
        obj["TruckNumber"]=text;
        setDetails({...details, ...obj})}
    
    const onPress=()=>{
        navigation.navigate("WorksPage")
    }

    return (
      <>
        <View style={{marginTop: StatusBar.currentHieght || 30}}>           
            <HeadBar navigation={navigation}/>
            <Text>DETAILS</Text>
            {console.log("theDetailsObject:")}
            {console.log(details)}
            <Text style={{marginTop:10, color:"red"}}>TruckNumber</Text>
            <TextInput
                style={{width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <DetailsPicker theOption="TrucksTypes" detail="TruckType" options={options} details={details} setDetails={setDetails} />
            <DetailsPicker theOption="Contractors" detail="Contractor" options={options} details={details} setDetails={setDetails} />
            <DetailsPicker theOption="Customers" detail="Customer" options={options} details={details} setDetails={setDetails} />
            <DetailsPicker theOption="Origins" detail="Origin" options={options} details={details} setDetails={setDetails} />
            <DetailsPicker theOption="Destinations" detail="Destination" options={options} details={details} setDetails={setDetails} />
            <DetailsPicker theOption="Cities" detail="City" options={options} details={details} setDetails={setDetails} />
            <TouchableOpacity
                onPress={onPress}>
                <Text style={{color:"green"}}>Continue</Text>
            </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default DetailsPage;

