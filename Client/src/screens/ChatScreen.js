import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, InputToolbar, Send } from "react-native-gifted-chat";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import * as axiosMessage from "../api/axiosMessage";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen({ route }) {
  const value = route.params;
  let roomId = value.roomId;
  let receiverId = value.receiverId.find((member) => member !== userId);

  const { userId } = useSelector((state) => state.authReducer);
  const { socket } = useSelector((state) => state.socketReducer);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivaMessage] = useState(null);

  useEffect(() => {
    const getMessageSocket = async () => {
      let newId = "id" + Math.random().toString(16).slice(2);
      try {
        socket.on("getMessage", (data, index) => {
          setArrivaMessage({
            _id: newId,
            text: data.text,
            createdAt: Date.now(),
            user: {
              _id: data.senderId == userId ? 1 : 2,
              name: "React native",
              avatar: "https://placeimg.com/140/140/any",
            },
            index: index,
          });
        });
      } catch (error) {
        console.log("Fail to get message from socket: ", error);
      }
    };
    getMessageSocket();
  }, []);

  useEffect(() => {
    arrivalMessage &&
      roomId &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, roomId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axiosMessage.get(roomId);
        let newResponse = await Promise.all(
          response.map(async (data, index) => {
            return {
              _id: data._id,
              index: index,
              text: data.text,
              createdAt: data.createdAt,
              user: {
                _id: data.sender == userId ? 1 : 2,
                name: "React native",
                avatar: "https://placeimg.com/140/140/any",
              },
            };
          })
        );

        setMessages(newResponse);
      } catch (error) {
        console.log("Get message: ", error);
      }
    };
    getMessages();
  }, [userId]);

  const onSend = useCallback(async (message = []) => {
    const newMessage = {
      sender: userId,
      conversationId: roomId,
      text: message[0].text,
    };

    socket.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: message[0].text,
    });

    try {
      const response = await axiosMessage.post("/", newMessage);
      let createNewMessage = {
        _id: response._id,
        text: response.text,
        createdAt: response.createdAt,
        user: {
          _id: response.sender == userId ? 1 : 2,
          name: "React native",
          avatar: "https://placeimg.com/140/140/any",
        },
      };
      setMessages((arr) => [...arr, createNewMessage]);
    } catch (error) {
      console.log("Fail to send Message ", error);
    }
  }, []);

  function renderInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.toolBar}
        textInputStyle={styles.textInput}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.btnSend}>
          <Ionicons name="send-sharp" size={25} color="#c4c4c4" />
        </View>
      </Send>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
        inverted={false}
        listViewProps={{
          style: { minHeight: "100%", flexDirection: "column-reverse" },
        }}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1D22",
  },
  toolBar: {
    backgroundColor: "#1A1D22",
  },
  textInput: {
    color: "#c4c4c4",
  },
  btnSend: {
    height: "100%",
    marginRight: "2%",
    justifyContent: "center",
  },
});
