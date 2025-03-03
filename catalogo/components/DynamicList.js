import { FlatList} from 'react-native';
import VEHICLES from '../data/data.js';
import styles from '../styles/styles.js';
import VehicleCard from './VehicleCard.js';

export default function DynamicList () {
    return (
        <FlatList
        data={VEHICLES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <VehicleCard name={item.name} image={item.image} price={item.price} />
        )}
        contentContainerStyle={styles.list}
        />
    )
};

