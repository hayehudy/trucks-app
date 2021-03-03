import { StyleSheet } from "react-native";

const DetailsOfWorkStyles = StyleSheet.create({
  container: {
    height: "100%",
  },

  background: {
    marginTop: 30,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ffa31a",
    width: "90%",
    height: 500,
    borderRadius: 50,
  },

  headertext: {
    marginTop: 20,
    fontSize: 25,
    color: "#ffffff",
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
    backgroundColor: "#cccccc",
    borderRadius: 20,
    width: "80%",
    height: 50,
    borderWidth: 2,
  },

  picker: {
    marginTop: 10,
    borderColor: "#000",
    backgroundColor: "#cccccc",
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

  btn: {
    // marginTop: 25,
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 10,
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
