import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/base';

export default function App() {
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
            <CheckBox title='Leche' containerStyle={styles.checkbox} />
            <CheckBox title='Arroz' containerStyle={styles.checkbox} />
            <CheckBox title='Cereal' containerStyle={styles.checkbox} />
            <CheckBox title='Cafe' containerStyle={styles.checkbox} />
            <CheckBox title='Pasta' containerStyle={styles.checkbox} />
            <CheckBox title='Mayonesa' containerStyle={styles.checkbox} />
            <CheckBox title='Huevo' containerStyle={styles.checkbox} />
            <CheckBox title='Jamon' containerStyle={styles.checkbox} />
            <CheckBox title='Queso' containerStyle={styles.checkbox} />
            <CheckBox title='Tocino' containerStyle={styles.checkbox} />
            <CheckBox title='Pan' containerStyle={styles.checkbox} />
            <CheckBox title='Jitomate' containerStyle={styles.checkbox} />
            <CheckBox title='Lechuga' containerStyle={styles.checkbox} />
            <CheckBox title='Pollo' containerStyle={styles.checkbox} />
            <CheckBox title='Galletas' containerStyle={styles.checkbox} />
            <CheckBox title='Tortillas' containerStyle={styles.checkbox} />
            <CheckBox title='Aceite' containerStyle={styles.checkbox} />
            <CheckBox title='Sal' containerStyle={styles.checkbox} />
            <CheckBox title='Frijoles' containerStyle={styles.checkbox} />
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
