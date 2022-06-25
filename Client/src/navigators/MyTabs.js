import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ContactsTab from "./ContactsTab";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#1A1D22",
        },
        tabBarActiveTintColor: "#c4c4c4",
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsTab}
        options={{
          headerStyle: {
            backgroundColor: "#19161D",
          },
          headerTitleStyle: {
            color: "#c4c4c4",
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="sharealt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          title: "Direct Messages",
          headerStyle: {
            backgroundColor: "#19161D",
          },
          headerTitleStyle: {
            color: "#c4c4c4",
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="wechat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#19161D",
          },
          headerTitleStyle: {
            color: "#c4c4c4",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
