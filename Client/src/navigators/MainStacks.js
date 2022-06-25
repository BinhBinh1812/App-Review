import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen";
import MyTabs from "./MyTabs";

const Stack = createNativeStackNavigator();

export default function MainStacks() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#19161D",
          },
          headerTitleStyle: {
            color: "#c4c4c4",
          },
          headerTintColor: "#c4c4c4",
        }}
      />
    </Stack.Navigator>
  );
}
