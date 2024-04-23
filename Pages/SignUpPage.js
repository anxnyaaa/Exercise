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

export const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.text]}>Sign Up</Text>
      <Text style={[styles.subText, styles.text]}>
        Sign up to start your Fitness journey.
      </Text>
      <Image style={styles.img} source={require("../assets/SignUp.png")} />

      <View style={styles.signUpContainer}>
        <Formik
          initialValues={{ name: "", age: 0, email: "", phone:"" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ gap: Platform.OS==='ios'? 15:20}}>
              <View style={{ marginBottom: Platform.OS==='ios'?'1.25%':'1%'}}>
                <View style={styles.dataCategory}>
                  <Text style={styles.dataCategoryText}>Name</Text>
                </View>
                <TextInput
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  style={styles.data}
                  value={values.name}
                />
              </View>
              <View style={{ marginBottom: Platform.OS==='ios'?'1.25%':'1%'}}>
                <View style={styles.dataCategory}>
                  <Text style={styles.dataCategoryText}>Age</Text>
                </View>
                <TextInput
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  style={styles.data}
                  value={values.number}
                />
              </View>
              <View style={{ marginBottom: Platform.OS==='ios'?'1.25%':'0.5%'}}>
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
              <View style={{ marginBottom: Platform.OS==='ios'?'1.25%':'1%'}}>
                <View style={styles.dataCategory}>
                  <Text style={styles.dataCategoryText}>Phone</Text>
                </View>
                <TextInput
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  style={styles.data}
                  value={values.phone}
                />
              </View>
              <Pressable style={styles.btn} onPress={handleSubmit}>
                <Text style={[styles.btnText, styles.text]}>Sign Up</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '20%',
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
    paddingVertical: "1%",
  },
  subText: {
    fontSize: 18,
    fontWeight: "300",
    paddingVertical: "1%",
  },
  img: {
    width: 350,
    height: 250,
  },
  btn: {
    marginTop: '2%',
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
  signUpContainer: {
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
});
