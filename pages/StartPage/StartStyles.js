import { StyleSheet } from "react-native";

const StartStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },

  loginBtn: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginTop: 80,
    justifyContent: "center",
    backgroundColor: "#9400d3",
    borderColor: "black",
    borderWidth: 7,
    elevation: 30,
  },

  loginText: {
    textAlign: "center",
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default StartStyles;
