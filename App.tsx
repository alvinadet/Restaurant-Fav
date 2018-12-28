import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Restaurant from "./src/screen/Restaurant";


export default class App extends React.Component{

  render() {
    return <Restaurant />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
