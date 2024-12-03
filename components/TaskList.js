import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const TaskList = ({ task, onToggleComplete }) => {
  return (
    <View style={styles.taskContainer}>
      <Text
        style={[
          styles.taskText,
          task.completed && styles.completedTaskText,
        ]}
      >
        {task.name}
      </Text>
      <TouchableOpacity
        style={[styles.button, task.completed ? styles.completedButton : styles.incompleteButton]}
        onPress={() => onToggleComplete(task.id)}
      >
        <Text style={styles.buttonText}>
          {task.completed ? "Desmarcar" : "Completar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "blue",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#212121",
    flex: 1,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  incompleteButton: {
    backgroundColor: "red",
  },
  completedButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
