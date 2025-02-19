import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/base';
import { useState } from 'react';

export default function App() {
  
  const [checked, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  });

  const list_data = [
    {id: "1", value: "Leche" },
    {id: "2", value: "Cereal" },
    {id: "3", value: "Cafe" },
    {id: "4", value: "Arroz" },
  ];

  const checkboxHandler = (item) => {
    setCheckedItems((prevState))
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Text style={styles.navbarText}>To-Do-List</Text>
      </View>

      <View style={styles.bodyContainer}> 
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Lista de Compras</Text>
        </View>

        <ScrollView style={styles.bodyContentContainer}>
          <View style={styles.scrollContent}>
            <CheckBox title='Leche' containerStyle={styles.checkbox} checked={checked} onPress={checkedHandler} />
            <CheckBox title='Arroz' containerStyle={styles.checkbox} />
            <CheckBox title='Cereal' containerStyle={styles.checkbox} />
            <CheckBox title='Cafe' containerStyle={styles.checkbox} />
          </View>
        </ScrollView>

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbarContainer:{
    backgroundColor: "#3e5c76",
    height: "12%",
    width: "100%",
    justifyContent: "center"
  },
  navbarText:{
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 12,
    marginTop:48
  },
  bodyContainer:{
    maxWidth: "100%",
    height: "90%",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer:{
    backgroundColor: "#748cab",
    height: "6%",
    marginTop: "5%",
    justifyContent: "center",
    width: "100%",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
  },
  titleText:{
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: "5%",
    color: "#fff"
  },
  bodyContentContainer:{
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
  scrollContent:{
    alignItems: "center",
    marginBottom: "10%",
    
  }
});
