import React from "react";
import { Image, View, Text, Pressable, StyleSheet } from "react-native";

export const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.text]}>Welcome to Fitness App</Text>
      <Text style={[styles.subText, styles.text]}>
        The all-in-one Ultimate Fitness Tracking App you need.
      </Text>
      <Image
        style={styles.img}
        source={require("../assets/Landing Page.png")}
      />
      <Pressable style={styles.btn}>
        <Text style={[styles.btnText, styles.text]}>Get Started</Text>
      </Pressable>
      <View style={styles.signInContainer}>
        <Text style={[styles.signIn, {fontWeight: '400'}]}>Already have an account? </Text>
        <Pressable>
          <Text style={[styles.signIn, styles.signInBtn]}>Sign In </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  text: {
    textAlign: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    paddingVertical: "1%",
  },
  subText: {
    fontSize: 18,
    fontWeight: '300',
    paddingVertical: "2%",
  },
  img: {
    width: 350, 
    height: 300,
  },
  btn: {
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    alignSelf: "stretch",
    backgroundColor: "#6C63FF",
    borderRadius: 50,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '800',
    color: "white",
  },
  signInContainer: { 
    flexDirection: "row", 
    gap: 4
  },
  signIn: {
    fontSize: 15,
    paddingVertical: "5%",
  },
  signInBtn: {
    fontWeight: '600',
    color: "#6C63FF",
  },
});
