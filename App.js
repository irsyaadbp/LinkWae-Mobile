import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Constants from 'expo-constants';

import Navigation from "./src/navigation";
import PulsaDataComponent from './src/screens/HomeScreen/PulsaDataComponent';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.statusBar}/>
      <View style={styles.container}>
        <Navigation />
        {/* <PulsaDataComponent/> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: "white",
    height: Constants.statusBarHeight,
  }
});
