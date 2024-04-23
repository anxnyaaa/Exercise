import React from "react";
import { Image, View, Text, Pressable, StyleSheet } from "react-native";

export const LandingPage = () => {
  return (    
    <View style={styles.container}>
      <Text style={[styles.heading, styles.text]}>Welcome to</Text>
      <Text style={[styles.mainText, styles.text]}>Fitness App</Text>
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
      <View style={styles.signUpContainer}>
        <Text style={[styles.signUp, {fontWeight: '400'}]}>Already have an account? </Text>
        <Pressable>
          <Text style={[styles.signUp, styles.signUpBtn]}>Sign In </Text>
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
    position: 'relative'
  },
  text: {
    textAlign: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: "1%",
  },
  mainText: {
    fontSize: 28,
    fontWeight: '700',
    padding: "1.5%",
    marginBottom: '4%',
    backgroundColor: '#6C63FF',
    color: 'white',
    transform: [{rotate:'-2.5deg'}]    
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
  signUpContainer: { 
    flexDirection: "row", 
    gap: 4
  },
  signUp: {
    fontSize: 15,
    paddingVertical: "5%",
  },
  signUpBtn: {
    fontWeight: '600',
    color: "#6C63FF",
  },
});
