import { StyleSheet } from "react-native";

const DetailsOfWorkStyles = StyleSheet.create({
  container: {
    height: "100%",
  },

  background: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#cccccc",
    width: "90%",
    borderRadius: 50,
  },

  headertext: {
    marginTop: 20,
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },

  titletext: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
  },

  TextInput: {
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "80%",
    height: 45,
    borderWidth: 2,
  },

  picker: {
    marginTop: 10,
    borderColor: "#000",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    width: "80%",
    borderRadius: 20,
  },

  btnView: {
    marginTop: 25,
    flexDirection: "row",
    padding: 10,
    height: 80,
    width: "90%",
    justifyContent: "space-between",
  },

  btnCamera: {
    // padding: 15,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "80%",
    height: 50,
    borderWidth: 2,
  },

  btn: {
    // marginTop: 25,
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 7,
    width: "45%",
    height: 50,
    alignItems: "center",
  },

  btntext: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default DetailsOfWorkStyles;
