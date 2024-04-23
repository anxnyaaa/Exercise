import React from "react";
import { Image, View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const SuccessPage = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.mainText, styles.text]}>Yahoo!!!</Text>
      <View style={styles.line}></View>
      <Image style={styles.img} source={require("../assets/Success.png")} />
      <Text style={[styles.subText1, styles.text, { marginHorizontal: "5%" }]}>
        You made it! You made it to the first step of your Fitness.
      </Text>
      <Text style={[styles.subText2, styles.text]}>
        Now get started to make your next steps sexier.
      </Text>
      <Pressable style={styles.btn}>
        <Text style={[styles.btnText, styles.text]}>Lessgo!</Text>
        <FontAwesome5 name="grin-wink" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "15%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: "5%",
    position: "relative",
  },
  text: {
    textAlign: "center",
  },
  mainText: {
    fontSize: 28,
    fontWeight: "700",
    padding: "1.5%",
    marginBottom: "-4%",
    backgroundColor: "#6C63FF",
    color: "white",
    transform: [{ rotate: "-5deg" }],
  },
  line: {
    borderWidth: 1,
    borderColor: "black",
    width: 100,
    marginVertical: "-6%",
  },
  subText1: {
    fontSize: 18,
    fontWeight: "300",
    marginVertical: "-5%",
  },
  subText2: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: "-15%",
  },
  img: {
    width: 350,
    height: 250,
    marginVertical: "1%",
  },
  btn: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: "2%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    alignSelf: "stretch",
    backgroundColor: "#6C63FF",
    borderRadius: 50,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
  },
  LoginContainer: {
    marginVertical: "2%",
    alignSelf: "stretch",
  },
});
