import React , {useState, useEffect, useRef} from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DetailsOfWorkStyles from "./DetailsOfWorkStyles";
import {Picker} from '@react-native-picker/picker';
import { Camera } from 'expo-camera';
import { Button, Icon } from "native-base";
import MakeCamera from "../../component/MakeCamera";


const DetailsOfWork = ({works,setWorks,setShow}) => { 
    const products=["apple","banana","egg"];
    const [theDetails,setTheDetails]= useState({});    
    const [value,setValue]=useState();
    const [startCamera,setStartCamera]=useState(false)
    
    const onChangeText=(text)=>{
        setValue(text);
        const obj={};
        obj["TonsOrLoad"]=text;
        setTheDetails({...theDetails, ...obj})}

    const onPress=()=>{
        let theWorks=works;
        theWorks.push(theDetails);
        setWorks(theWorks);
        setShow(false);
    }

    return (
      <> 
        <View style={DetailsOfWorkStyles.container}>
            <Text style={{alignSelf:"center",color:"white"}}>DETAILS-OF-WORK</Text>
         
            <Text style={{color:"#003300",marginTop:20,fontSize:20}}>Tons or Load</Text>   
            <View style={DetailsOfWorkStyles.inputView}>
            <TextInput
                style={DetailsOfWorkStyles.TextInput}
                onChangeText={text => onChangeText(text)}
                value={value}
            /> 
            </View>
            
            <View style={{zIndex:2000,marginTop:20}}>
            <Text style={{color:"#003300",fontSize:20}}>Product</Text>
            <Picker
                selectedValue={theDetails.Product}
                style={{width:250,height: 50,backgroundColor: "#E5E5E5",borderRadius: 10,
                borderWidth: 2}}               
                onValueChange={(itemValue, itemIndex) =>
                        {const detailsObj={};
                        detailsObj.Product=itemValue;                    
                        setTheDetails({...theDetails, ...detailsObj})}}>
                {products.map((product,index)=>(
                <Picker.Item label={product} value={product} key={index}/>))}
            </Picker>
            </View>

            
            <MakeCamera startCamera={startCamera} setStartCamera={setStartCamera}/>

            <View style={{zIndex:2000}}>
            <TouchableOpacity style={{marginTop: 40,backgroundColor: "#00ff00",borderRadius: 20, padding: 10, elevation: 2,width:200}} onPress={onPress}>
                <Text>Confirm</Text>
            </TouchableOpacity>
            </View>
        </View>     

      </>
    );
  };
  
  export default DetailsOfWork;

 