import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#2c3e50", "#3498db"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#F1F2B5", "#135058"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00d2ff", "#3a7bd5"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#acb6e5", "#86fde8"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff8008", "#ffc837"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#d3959b", "#bfe6ba"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      // Background Linear Gradient
      colors={[
        weatherOptions[condition].gradient[0],
        weatherOptions[condition].gradient[1],
      ]}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
