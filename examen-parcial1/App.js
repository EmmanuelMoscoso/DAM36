import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useState } from 'react';
import { CheckBox } from "@rneui/base";



export default function App() {
  const count = () => {
    let count = 0;
    return () => count++;
  }
  const [tasksArray, setTasksArray] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasksArray([...tasksArray, { id: count(), text: task, completed: false }]);
      setTask("");
    }
  }

  const checkTask = (id) => {
    setTasksArray(tasksArray.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };


  return (
    <View style={styles.container}>
      <View style = {styles.navBarContainer}> 
        <Text style={styles.navbarTitle}> Lista de Compras </Text>
      </View>

      <View style={styles.inputContainer}> 
        <Text style={styles.inputLabel}> Agregar nueva tarea</Text>
        <TextInput style={styles.input} placeholder='Ingresa una nueva tarea' value={task} onChangeText={setTask}></TextInput>
        <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}> Agregar tarea</Text>
        </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.tasksContainer}>
        <View style={styles.scrollContent}>
            {tasksArray.map((item) => (
              <View key={item.id} style={styles.taskContainer}>
                <CheckBox
                  title={item.text}
                  checked={item.completed}
                  containerStyle={styles.checkbox}
                  onPress={() => checkTask(item.id)}
                />

              </View>
            ))}
          </View>
        </ScrollView>
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2d42',
    alignItems: "center"
  },
  navBarContainer: {
    height: "12%",
    width: "100%",
    backgroundColor: "#ef233c",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarTitle: {
    marginTop: 48,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  inputContainer: {
    justifyContent: "center",
    backgroundColor: "#edf2f4",
    width: "96%",
    marginVertical: "4%",
    borderRadius: 10
  },
  inputLabel: {
    fontSize: 24,
    color: "#d90429",
    fontWeight: "bold",
    marginVertical: 12,
    marginHorizontal: 8
  },
  input:{
    fontSize: 20,
    height: 34,
    marginVertical: 12,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
  addButtonContainer:{
    alignItems: "center",
    justifyContent: "center"
  },
  addButton:{
    backgroundColor: "#ef233c",
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: "#fff",
    borderRadius: 10,
    marginVertical: 12,
    textAlign: "center"
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  tasksContainer: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  checkbox: {
    width: "96%",
    justifyContent: "center",
    borderRadius: 12
  },
  scrollContent: {
    alignItems: "center",
    marginBottom: 20
  },

});
