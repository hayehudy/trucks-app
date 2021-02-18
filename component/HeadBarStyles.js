import { StyleSheet } from "react-native";

const HeadBarStyles = StyleSheet.create({
  Button: {
    width: 80,
    flex: 1,
    marginTop: 25,
    marginRight: 10,
  },
  Icon: {
    fontSize: 40,
  },
  logo: {
    marginTop: -28,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 50,
  },
  call: {
    marginTop: -50,
    marginLeft: 300,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconphone: {
    color: "black",
    // size: 50,
  },
});

export default HeadBarStyles;
