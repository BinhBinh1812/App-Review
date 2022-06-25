import React from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function FormAuthInput({ placeholder, ...args }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder={placeholder} {...args} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: width / 8,
    borderRadius: 8,
    marginBottom: "4%",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
  },
  textInput: {
    marginHorizontal: "4%",
  },
});
