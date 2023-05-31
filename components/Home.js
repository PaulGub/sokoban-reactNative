import { TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import BackgroundImage from "../assets/images/background.png";

const Home = ({ navigation }) => {

  return (
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Playground')}>
          <Text style={styles.buttonText}>PLAY</Text>
        </TouchableOpacity>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: "#CCC",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  buttonText: {
    fontFamily: 'PixelFont', // You need to add this font to your project.
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Home;