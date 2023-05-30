import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, StyleSheet } from "react-native";

const Arrow = ({ direction, callback }) => {
  return (
    <TouchableOpacity style={styles.arrow} onPress={() => callback(direction) }>
      <Ionicons name={`md-arrow-${direction}`} size={32} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrow: {
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 50
  }
});

export default Arrow;