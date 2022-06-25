import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ListFriendsScreen from "../screens/ListFriendsScreen";
import ListRoomsScreen from "../screens/ListRoomsScreen";

const Tab = createMaterialTopTabNavigator();

export default function ContactsTab() {
  return (
    <Tab.Navigator
      initialRouteName="Friends"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#1A1D22",
        },
        tabBarActiveTintColor: "#c4c4c4",
      }}
    >
      <Tab.Screen name="Friends" component={ListFriendsScreen} />
      <Tab.Screen name="Groups" component={ListRoomsScreen} />
    </Tab.Navigator>
  );
}
