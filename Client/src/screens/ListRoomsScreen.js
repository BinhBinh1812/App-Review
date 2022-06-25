import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

export default function ListRoomsScreen() {
  const data = [
    {
      id: "1",
      title: "Gsoft",
      message: "Chào mọi người",
    },
    {
      id: "2",
      title: "Gia đình",
      message: "Chiều nay con về",
    },
    {
      id: "3",
      title: "Nhóm ăn nhậu",
      message: "Tối nay 8 giờ",
    },
    {
      id: "4",
      title: "Bình, My, Tùng",
      message: "haha",
    },
    {
      id: "5",
      title: "Đi chơi noel",
      message: "haha",
    },
    {
      id: "6",
      title: "Team dev",
      message: "mai release",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        // onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.inner}>
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addRoomBtn}>
        <View style={styles.icon}>
          <AntDesign name="addusergroup" size={width / 16} color="#c4c4c4" />
        </View>
        <Text style={styles.title}>Add new group</Text>
      </TouchableOpacity>
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
  addRoomBtn: {
    marginHorizontal: "4%",
    marginVertical: "2%",
    height: width / 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2%",
  },
  icon: {
    width: width / 10,
    height: width / 10,
    backgroundColor: "#333438",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginHorizontal: "4%",
    color: "#c4c4c4",
    fontSize: width * 0.04,
  },
  buttonContainer: {
    width: width,
    height: width / 6,
    borderBottomWidth: 1,
    borderColor: "#3D3F43",
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "2%",
    alignItems: "center",
  },
  profileImg: {
    width: width / 8,
    height: width / 8,
    borderRadius: 100,
  },
  titleContainer: {
    width: width * 0.7,
    marginHorizontal: "2%",
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
});
