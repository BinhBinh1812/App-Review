import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

import {
  setAccessToken,
  setAuthorized,
  setUserName,
  setPhoneNumber,
  setUserId,
} from "../redux/actions/authAction";
import { setSocket } from "../redux/actions/socketAction";
import Loading from "../components/Loading";
import FormSearch from "../components/textInput/FormSearch";

const { width } = Dimensions.get("screen");

export default function SettingsScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { userName, phoneNumber } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(setAuthorized(false));
      dispatch(setAccessToken(""));
      dispatch(setPhoneNumber(""));
      dispatch(setUserName(""));
      dispatch(setUserId(""));
      dispatch(setSocket(""));
    }, 2000);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.innerDetails}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileImg}
                source={require("../assets/images/Profile_Picture.jpg")}
                resizeMode="stretch"
              />
              <View style={styles.information}>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.phoneNumber}>{phoneNumber}</Text>
              </View>
            </View>

            <FormSearch
              placeholder="Update your status"
              placeholderTextColor="#3D3F43"
            />
            <>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="notifications-off" size={24} color="#3D3F43" />
                <Text style={styles.titleBtn}>Pause notifications</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="#3D3F43"
                />
                <Text style={styles.titleBtn}>View profile</Text>
              </TouchableOpacity>
            </>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.innerButtons}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="notifications" size={24} color="#3D3F43" />
              <Text style={styles.titleBtn}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Entypo name="save" size={24} color="#3D3F43" />
              <Text style={styles.titleBtn}>Saved items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Ionicons name="options" size={24} color="#3D3F43" />
              <Text style={styles.titleBtn}>Preferences</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLogOut()}
            >
              <AntDesign name="logout" size={24} color="#3D3F43" />
              <Text style={styles.titleBtn}>Log out</Text>
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
  detailsContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#3D3F43",
  },
  innerDetails: {
    flex: 1,
    margin: "4%",
    justifyContent: "space-evenly",
  },
  buttonsContainer: {
    flex: 2,
  },
  innerButtons: {
    marginHorizontal: "4%",
  },
  profileImg: {
    width: width / 8,
    height: width / 8,
    borderRadius: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  information: {
    marginHorizontal: "4%",
  },
  userName: {
    color: "#c4c4c4",
    fontSize: width * 0.05,
  },
  phoneNumber: {
    color: "#3D3F43",
  },
  button: {
    height: width / 12,
    flexDirection: "row",
    alignItems: "center",
  },
  titleBtn: {
    color: "#3D3F43",
    fontSize: width * 0.04,
    marginHorizontal: "4%",
  },
});
