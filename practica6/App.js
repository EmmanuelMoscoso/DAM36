import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/base";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Ionicons style={styles.navbarIcon} name="chevron-back-outline" size={24} color="#000"></Ionicons>
        <Text style={styles.navbarText}> Lista de tareas </Text>
        <Ionicons style={styles.navbarIcon} name="cog-outline" size={24} color="#000"></Ionicons>
      </View>

      <View style={styles.bodyContainer}> 
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Agregar nueva tarea</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nueva tarea"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
        
        <ScrollView style={styles.bodyContentContainer}>
          <View style={styles.scrollContent}>
            {tasks.map((item) => (
              <View key={item.id} style={styles.taskContainer}>
                <CheckBox
                  title={item.text}
                  checked={item.completed}
                  containerStyle={styles.checkbox}
                  onPress={() => toggleTask(item.id)}
                />
                <TouchableOpacity style={styles.deleteButton} onPress={() => removeTask(item.id)}>
                <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    backgroundColor: "#3e5c76",
    height: "11%",
    width: "100%",
  },
  navbarText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 12,
    marginTop: 54
  },
  navbarIcon: {
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 12,
    marginTop: 54
  },
  bodyContainer: {
    maxWidth: "100%",
    height: "90%",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    backgroundColor: "#748cab",
    height: "6%",
    marginBottom: "5%",
    justifyContent: "center",
    width: "100%",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: "5%",
    color: "#fff"
  },
  bodyContentContainer: {
    paddingVertical: "5%",
    height: "90%",
    width: "100%",
    borderRadius: 10
  },
  checkbox: {
    width: "90%",
    justifyContent: "center",
    borderRadius: 12
  },
  scrollContent: {
    alignItems: "center",
    marginBottom: "10%",
  },
  input: {
    padding: 10,
    marginBottom: 10,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 14
  },
  addButton:{
    backgroundColor: "#748cab",
    width: "20%",
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 8
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    paddingRight: 20
  },
});
