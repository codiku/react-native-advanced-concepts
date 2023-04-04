import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingVertical: 10,
    textAlign: "center",
  },
  body: {
    flex: 6,
  },
  image: { height: 300, marginVertical: 30 },
  footer: { flex: 1, justifyContent: "center", alignItems: "center" },
  btn: { backgroundColor: "black", padding: 30 },
  btnTxt: { color: "white" },
});
