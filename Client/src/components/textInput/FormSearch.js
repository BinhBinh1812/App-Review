import React from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export default function FormSearch({
  placeholderTextColor,
  placeholder,
  ...args
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inner}
        placeholder={placeholder}
        {...args}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: width / 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#3D3F43",
    margin: "4%",
    justifyContent: "center",
  },
  inner: {
    color: "#3D3F43",
    marginHorizontal: "4%",
  },
});
