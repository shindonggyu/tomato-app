import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo";
import Button from "../button";

export default class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <LinearGradient style={styles.linear} colors={["#f21818", "#ea7272"]}>
          <View style={styles.upper}>
            <Text style={styles.time}>25:00</Text>
          </View>
          <View style={styles.lower}>
            <Button iconName="play" onPress={() => alert("it works")} />
            <Button iconName="pause" onPress={() => alert("it works")} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linear: {
    flex: 1
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 100,
    fontWeight: "200"
  }
});
