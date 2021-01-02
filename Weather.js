import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze?",
    subtitle: "it is something like fog.",
    statusBar: "light-content",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#2c3e50", "#3498db"],
    title: "Thunderstorm!",
    subtitle: "never go to outside.",
    statusBar: "light-content",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#F1F2B5", "#135058"],
    title: "Drizzle",
    subtitle: "a tiny rain.",
    statusBar: "dark-content",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "it's rain",
    subtitle: "don't forget your umbrella.",
    statusBar: "light-content",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#acb6e5", "#86fde8"],
    title: "happy snow!",
    subtitle: "let's make a snowman.",
    statusBar: "light-content",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff8008", "#ffc837"],
    title: "it's clear!",
    subtitle: "just go outside, and to be happy.",
    statusBar: "light-content",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "so gloomy.",
    subtitle: "i don't like clouds.",
    statusBar: "light-content",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#d3959b", "#bfe6ba"],
    title: "Mist",
    subtitle: "for your skin.",
    statusBar: "light-content",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#304352", "#d7d2cc"],
    title: "dust in the wind",
    subtitle: "stay at home.",
    statusBar: "light-content",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        weatherOptions[condition].gradient[0],
        weatherOptions[condition].gradient[1],
      ]}
    >
      <StatusBar barStyle={weatherOptions[condition].statusBar} />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
