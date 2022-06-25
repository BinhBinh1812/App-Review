import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import Routes from "./src/navigators/Routes";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Routes />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
