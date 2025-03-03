import { View, Text} from 'react-native';
import styles from '../styles/styles';

export default function Navbar () {
    return (
    <View style={styles.navbar}>
      <Text style={styles.navTitle}>Catálogo de Vehículos</Text>
    </View>
  )};