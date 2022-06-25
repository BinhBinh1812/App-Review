import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

export default function FormAuthButton({ title, ...args }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} {...args}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    width: width * 0.8,
    height: width / 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    backgroundColor: "#017A59",
  },
  title: {
    color: "#fff",
    fontSize: width * 0.05,
  },
});
