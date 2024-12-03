import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), name: task, completed: false }]);
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskList task={item} onToggleComplete={handleToggleComplete} />
        )}
        contentContainerStyle={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  taskList: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
