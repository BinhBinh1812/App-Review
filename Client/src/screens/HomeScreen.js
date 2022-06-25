import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { BASE_SOCKET_URL } from "../../env";
import { setSocket } from "../redux/actions/socketAction";
import * as axiosConversation from "../api/axiosConversation";

import FormSearch from "../components/textInput/FormSearch";

const { width } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
  const { userId } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io(BASE_SOCKET_URL);
    dispatch(setSocket(socket));

    socket.emit("addUser", userId);

    const getConversations = async () => {
      try {
        const response = await axiosConversation.get(userId);
        setData(response);
      } catch (error) {
        console.log("Fail to get conversations ", error);
      }
    };
    getConversations();
  }, []);

  const renderItem = ({ item }) => {
    const roomData = {
      roomId: item._id,
      receiverId: item.members,
    };
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Chat", roomData)}
      >
        <View style={styles.inner}>
          <Image
            style={styles.profileImg}
            source={{ uri: `${item.profilePicture}` }}
            resizeMode="stretch"
          />
          <View style={styles.titleContainer}>
            <Text style={styles.conversationName}>{item._id}</Text>
            <Text style={styles.lastMess}>Hello everyone!</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FormSearch placeholder="Search..." placeholderTextColor="#3D3F43" />
        <TouchableOpacity style={styles.addFriendBtn}>
          <View style={styles.icon}>
            <AntDesign name="adduser" size={width / 16} color="#c4c4c4" />
          </View>
          <Text style={styles.title}>Add new friend</Text>
        </TouchableOpacity>
        <View style={styles.conversationsContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
          />
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
  addFriendBtn: {
    marginHorizontal: "4%",
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
  conversationsContainer: {
    flex: 1,
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
