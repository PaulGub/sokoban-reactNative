import React from 'react';
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import Button from './Button';
import BackgroundImage from "../assets/images/background.png";

const Home = ({ navigation }) => {
  return (
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sokoban</Text>
          <Text style={styles.subtitle}>by Darloub Games</Text>
        </View>
        <Button onPress={() => navigation.navigate('Playground')} text="PLAY" />
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
});

export default Home;
