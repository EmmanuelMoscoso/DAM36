import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

export default function VehicleCard({ name, image, price }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>Precio: {price}</Text>
        </View>
    );
}
