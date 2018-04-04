import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo";
import Button from "../button";

export default class Timer extends React.Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    console.log(currentProps);
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  _formatTime = time => {
    let minutes = Math.floor(time / 60);
    let seconds = parseInt(time % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  render() {
    const {
      elapsedTime,
      isPlaying,
      timeDuration,
      startTimer,
      restartTimer
    } = this.props;

    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <LinearGradient style={styles.linear} colors={["#f21818", "#ea7272"]}>
          <View style={styles.upper}>
            <Text style={styles.time}>
              {this._formatTime(timeDuration - elapsedTime)}
            </Text>
          </View>
          <View style={styles.lower}>
            {!isPlaying ? (
              <Button iconName="play" onPress={startTimer} />
            ) : null}
            {isPlaying ? (
              <Button iconName="pause" onPress={restartTimer} />
            ) : null}
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
