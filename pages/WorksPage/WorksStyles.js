import { StyleSheet } from "react-native";

const WorksStyles = StyleSheet.create({
  container: {
    height: "100%",
  },

  headeritems: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    height: 50,
  },
  allitems: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 20,
    borderBottomWidth: 2,
    height: 70,
    backgroundColor: "#d9d9d9",
  },

  headertext: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    alignSelf: "center",
  },
  titleheader: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  row1: {
    alignItems: "center",
    width: "30%",
  },
  row2: {
    alignItems: "center",
    width: "30%",
  },
  row3: {
    alignItems: "center",
    width: "30%",
  },
  row4: {
    alignItems: "center",
    width: "10%",
  },

  titletext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  btn: {
    marginBottom:15,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    width: "60%",
    height: 50,
    justifyContent: "center",
  },
  textbtn: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },

  modalView: {
    backgroundColor: "#fff",
    width: "80%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 2,
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 200,
  },

  modaltext: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 40,
    textAlign: "center",
  },

  btnmodalView: {
    marginTop: 20,
    flexDirection: "row",
    padding: 10,
    height: 80,
    width: "80%",
    justifyContent: "space-between",
  },
  btnmodal: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "red",
    padding: 10,
    height: 50,
    borderRadius: 15,
  },
  textbtnmodal: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  
});

export default WorksStyles;
