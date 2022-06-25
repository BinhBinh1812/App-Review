import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text>ContactsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1D22",
  },
});
