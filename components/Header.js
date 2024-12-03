import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "gray",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
