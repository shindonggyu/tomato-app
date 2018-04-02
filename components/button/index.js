import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={40} color="white" />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
