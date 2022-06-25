import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";

import FormAuthButton from "../components/button/FormAuthButton";
import FormAuthInput from "../components/textInput/FormAuthInput";
import * as axiosAuth from "../api/axiosAuth";
import Loading from "../components/Loading";

const { width } = Dimensions.get("screen");

export default function RegisterScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    setIsLoading(true);
    setTimeout(async () => {
      setIsLoading(false);
      try {
        const response = await axiosAuth.post("/register", {
          username: userName,
          phonenumber: phoneNumber,
          email: email,
          password: password,
        });
        if (response._id) {
          navigation.navigate("Login");
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <FormAuthInput
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />
          <FormAuthInput
            placeholder="Phone number"
            keyboardType="numeric"
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <FormAuthInput
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <FormAuthInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <FormAuthButton
              title="Register"
              onPress={() => {
                register();
              }}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.title}> Already Member Log In Here!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D22",
  },
  inner: {
    flex: 1,
    marginHorizontal: "4%",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: width * 0.04,
    color: "#fff",
    margin: "4%",
    textDecorationLine: "underline",
  },
});
