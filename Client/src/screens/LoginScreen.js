import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";

import FormAuthButton from "../components/button/FormAuthButton";
import FormAuthInput from "../components/textInput/FormAuthInput";
import * as axiosAuth from "../api/axiosAuth";
import {
  setAccessToken,
  setUserId,
  setAuthorized,
  setPhoneNumber,
  setUserName,
} from "../redux/actions/authAction";

const { width } = Dimensions.get("screen");

export default function LoginScreen({ navigation }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const logIn = async () => {
    const response = await axiosAuth.post("/login", {
      username: userName,
      password: password,
    });
    dispatch(setAccessToken(response.accessToken));
    dispatch(setUserId(response._id));
    dispatch(setAuthorized(true));
    dispatch(setPhoneNumber(response.phonenumber));
    dispatch(setUserName(response.username));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <FormAuthInput
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />
          <FormAuthInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={styles.buttonContainer}>
            <FormAuthButton title="Log In" onPress={() => logIn()} />
            <TouchableOpacity onPress={() => navigation.push("Register")}>
              <Text style={styles.title}>Register Here!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
