import { StyleSheet } from "react-native";

const DaySummaryStyles = StyleSheet.create({
  container: {
    height: "100%",
  },

  headeritems: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "orange",
    height: 50,
  },
  allitems: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 20,
    borderBottomWidth: 2,
    borderColor: "orange",
    height: 70,
  },

  headertext: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
  },
  titleheader: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },

  row1: {
    alignItems: "center",
    width: "23%",
    justifyContent: "center",
  },
  row2: {
    alignItems: "center",
    width: "23%",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#000",
  },
  row3: {
    alignItems: "center",
    width: "23%",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#000",
  },
  row4: {
    alignItems: "center",
    width: "23%",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#000",
  },
  row5: {
    alignItems: "center",
    width: "8%",
    justifyContent: "center",
  },

  titletext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },

  btn: {
    marginBottom: 15,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    width: "45%",
    height: 50,
    justifyContent: "center",
  },
  textbtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  modalView: {
    backgroundColor: "#fff",
    width: "80%",
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
    color: "#333333",
    lineHeight: 40,
    textAlign: "center",
  },

  btnView: {
    // marginTop: 20,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    height: 80,
    width: "100%",
    justifyContent: "space-between",
  },

  btnmodalView: {
    flexDirection: "row",
    padding: 10,
    height: 80,
    width: "100%",
    justifyContent: "space-between",
  },
  btnmodal: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "orange",
    padding: 10,
    height: 50,
    borderRadius: 15,
  },
  textbtnmodal: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  details: {
    padding: 20,
  },

  txttitle: {
    fontWeight: "bold",
    lineHeight: 32,
    fontSize: 17,
    // marginBottom: -20,
  },

  txtdetails: {
    left: 120,
    fontSize: 16,
    marginTop: -23,
  },
  txtdetails1: {
    left: 120,
    fontSize: 16,
    marginTop: -23,
    marginBottom: -17,
  },
});

export default DaySummaryStyles;
