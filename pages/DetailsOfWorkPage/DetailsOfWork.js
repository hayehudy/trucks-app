import React , {useState} from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DetailsOfWorkStyles from "./DetailsOfWorkStyles";
import {Picker} from '@react-native-picker/picker';

const DetailsOfWork = ({works,setWorks,setShow}) => { 
    const products=["apple","banana","egg"];
    const [theDetails,setTheDetails]= useState({});    
    const [value,setValue]=useState()
    
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
      {/* {console.log (theDetails)} */}
        <View style={{
          alignSelf:"center",
          backgroundColor: "#263742",
          width: "90%",
          top: "100%",
          height: 450,
          position: "absolute",
          zIndex: 2000,
        }}>
            <Text style={{alignSelf:"center",color:"white"}}>DETAILS-OF-WORK</Text>
            <Text style={{marginLeft:40,color:"red",marginTop:20}}>Tons or Load</Text>
            <TextInput
                style={{marginLeft:40, width:100, height: 40, borderColor: 'gray', borderWidth: 1,color:"white"}}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Text style={{marginLeft:40,color:"red",marginTop:20}}>Product</Text>
            <Picker
                selectedValue={theDetails.Product}
                style={{marginLeft:40,width: 200,  height: 50,color:"white"}}
                onValueChange={(itemValue, itemIndex) =>
                        {const detailsObj={};
                        detailsObj.Product=itemValue;                    
                        setTheDetails({...theDetails, ...detailsObj})}}>
                {products.map((product,index)=>(
                <Picker.Item label={product} value={product} key={index}/>))}
            </Picker>
            <TouchableOpacity onPress={onPress}>
                <Text style={{marginLeft:40,marginTop:50,color:"red"}}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default DetailsOfWork;