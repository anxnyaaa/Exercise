import React from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import { Formik } from "formik";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.text]}>Login</Text>
      <Text style={[styles.subText, styles.text]}>
        Log in to level up your Fitness.
      </Text>
      <Image style={styles.img} source={require("../assets/Login.png")} />

      <View style={styles.LoginContainer}>
        <Formik
          initialValues={{
            name: "",
            age: 0,
            email: "",
            phone: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ gap: Platform.OS === "ios" ? 15 : 20 }}>
              <View
                style={{
                  marginBottom: Platform.OS === "ios" ? "1.25%" : "0.5%",
                }}
              >
                <View style={styles.dataCategory}>
                  <Text style={styles.dataCategoryText}>Email</Text>
                </View>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  style={styles.data}
                  value={values.email}
                />
              </View>
              <View
                style={{ marginBottom: Platform.OS === "ios" ? "1.25%" : "1%" }}
              >
                <View style={styles.dataCategory}>
                  <Text style={styles.dataCategoryText}>Password</Text>
                </View>
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  style={styles.data}
                  value={values.password}
                />
              </View>
              <Pressable style={styles.btn} onPress={handleSubmit}>
                <Text style={[styles.btnText, styles.text]}>Login</Text>
              </Pressable>
              <Text style={[styles.loginUsing, { fontWeight: "500" }]}>
                or log in using
              </Text>
              <View style={styles.loginUsingIconsContainer}>
                <View style={styles.loginIcons}>
                  <AntDesign name="twitter" size={22} color="#6C63FF" />
                </View>
                <View style={styles.loginIcons}>
                  <AntDesign name="google" size={22} color="#6C63FF" />
                </View>
                <View style={styles.loginIcons}>
                  <FontAwesome name="facebook-f" size={22} color="#6C63FF" />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "15%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: "2%",
    position: "relative",
  },
  text: {
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    paddingVertical: "0.5%",
  },
  subText: {
    fontSize: 18,
    fontWeight: "300",
    marginTop: "-5%",
  },
  img: {
    width: 350,
    height: 250,
    marginVertical: "1%",
  },
  btn: {
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
  dataCategory: {
    padding: "1.5%",
    paddingLeft: "5%",
    paddingRight: "-5%",
    backgroundColor: "white",
    marginLeft: "6%",
    zIndex: 1,
    marginTop: "-3%",
    marginRight: "-10%",
    position: "absolute",
  },
  dataCategoryText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6C63FF",
  },
  data: {
    padding: Platform.OS === "ios" ? "3%" : "1.5%",
    backgroundColor: "white",
    textAlign: "left",
    paddingHorizontal: "5%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#6C63FF",
    alignSelf: "stretch",
  },
  loginUsing: {
    fontSize: 15,
    textAlign: "center",
  },
  loginUsingIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginIcons: {
    padding: "2%",
    backgroundColor: "#f1ebf5",
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "2%",
  },
});
