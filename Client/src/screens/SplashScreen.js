import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

import FormAuthButton from "../components/button/FormAuthButton";

const { width, height } = Dimensions.get("screen");

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.logoImg}
          source={require("../assets/images/Logo_Splash.png")}
          resizeMode="stretch"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>Chat App!</Text>
        </View>
        <FormAuthButton
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D22",
  },
  inner: {
    flex: 1,
    marginTop: "16%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
  },
  logoImg: {
    width: width / 2,
    height: width / 2,
  },
  title: {
    color: "#fff",
    fontSize: width * 0.08,
  },
});
