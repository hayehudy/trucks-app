import { StyleSheet} from "react-native";

const DetailsOfWorkStyles = StyleSheet.create({
   
    container: {
    alignItems: "center",
    alignSelf:"center",
    backgroundColor: "grey",
    width: "90%",
    // top: "100%",
    height: 450,
    position: "absolute",
    borderRadius: 50,
    zIndex: 2000
  },

    inputView: {
        backgroundColor: "#E5E5E5",
        borderRadius: 10,
        width: "70%",
        height: 55,
        marginBottom: 20,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        elevation: 30,
      },
    
      TextInput: {
        alignSelf:"center",
        height: 50,
        flex: 1,
        fontSize: 20,
      },
});

export default DetailsOfWorkStyles;