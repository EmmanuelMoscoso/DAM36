import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E5E5' 
    },
    navbar: {
      backgroundColor: '#000', 
      height: "11%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    navTitle: {
      marginTop: 48,
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
    list: {
      padding: 10
    },
    card: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      marginBottom: 10,
      borderRadius: 0,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover'
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      marginTop: 10
    },
    price: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFF',
      backgroundColor: '#000', 
      padding: 5,
      marginTop: 5
      
    }
  });

  export default styles;