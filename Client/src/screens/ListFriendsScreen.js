import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

export default function ListFriendsScreen() {
  const data = [
    {
      id: "1",
      title: "Gsoft",
    },
    {
      id: "2",
      title: "Ba",
    },
    {
      id: "3",
      title: "Mẹ",
    },
    {
      id: "4",
      title: "My",
    },
    {
      id: "5",
      title: "Thánh teen code",
    },
    {
      id: "6",
      title: "Phi",
    },
    {
      id: "7",
      title: "Idol",
    },
    {
      id: "8",
      title: "Thánh đòi tiền",
    },
    {
      id: "9",
      title: "Huy",
    },
    {
      id: "10",
      title: "Hùng",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        // onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.inner}>
          <View style={styles.innerLeft}>
            <Image
              style={styles.profileImg}
              source={{ uri: "https://placeimg.com/140/140/any" }}
              resizeMode="stretch"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.conversationName}>{item.title}</Text>
              <Text style={styles.lastMess}>{item.message}</Text>
            </View>
          </View>

          <View style={styles.innerRight}>
            <TouchableOpacity style={styles.phoneBtn}>
              <Feather name="phone" size={width / 16} color="#c4c4c4" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                name="ios-videocam-outline"
                size={width / 14}
                color="#c4c4c4"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D22",
  },
  buttonContainer: {
    width: width,
    height: width / 6,
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "2%",
    justifyContent: "space-between",
  },
  innerLeft: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    width: width / 8,
    height: width / 8,
    borderRadius: 100,
  },
  titleContainer: {
    width: width * 0.7,
    marginHorizontal: "4%",
  },
  conversationName: {
    fontWeight: "500",
    color: "#c4c4c4",
    fontSize: width * 0.045,
  },
  lastMess: {
    color: "#3D3F43",
    fontSize: width * 0.03,
  },
  innerRight: {
    width: "16%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneBtn: {},
});
