import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Playground')}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: "#CCC",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Home;
