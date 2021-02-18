import { StyleSheet } from "react-native";

const logInStyles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    height: "100%",
  },

  image: {
    marginTop: 100,
    width: 300,
    height: 100,
    marginBottom: 40,
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
    height: 50,
    flex: 1,
    fontSize: 20,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#7F7F7F",
    color: "#fff",
    fontSize: 30,
  },
  loginText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default logInStyles;
