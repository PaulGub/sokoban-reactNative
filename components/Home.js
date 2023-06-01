import React from 'react';
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import CustomButton from './CustomButton';
import BackgroundImage from "../assets/images/background.png";

const Home = ({ navigation }) => {
  return (
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sokoban</Text>
          <Text style={styles.subtitle}>by Darloub Games</Text>
        </View>
        <CustomButton onPress={() => navigation.navigate('Playground')} text="PLAY" />
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: 'VT323',
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: 'VT323',
    color: "#fff",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
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
    fontFamily: 'VT323',
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Home;
