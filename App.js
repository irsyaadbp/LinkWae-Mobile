import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Constants from "expo-constants";

import Navigation from "./src/navigation";
import PulsaDataComponent from "./src/screens/HomeScreen/PulsaDataComponent";

import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.statusBar} />
      <View style={styles.container}>
        <Navigation />
        {/* <PulsaDataComponent/> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: "white",
    height: Constants.statusBarHeight
  }
});
