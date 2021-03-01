import { StyleSheet } from "react-native";

const DetailsOfWorkStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "grey",
    width: "90%",
    height: 550,
    position: "relative",
    borderRadius: 50,
    elevation: 200,
  },

  inputView: {
    backgroundColor: "#E5E5E5",
    borderRadius: 100,
    // width: "70%",
    height: 5,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    elevation: 8,
  },

  TextInput: {
    alignSelf: "center",
    height: 50,
    // elevation: 5,
    fontSize: 20,
  },
});

export default DetailsOfWorkStyles;
