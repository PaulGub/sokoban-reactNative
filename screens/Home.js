import React from 'react';
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import Button from '../components/Button';
import BackgroundImage from "../assets/images/background.png";
import CONST from "../CONST";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = ({ navigation }) => {
  return (
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.settings}>
          <Button radius={50} onPress={() => navigation.navigate('Settings')}>
            <Ionicons name={"md-settings-sharp"} style={styles.settingsBtn} size={32} color={"white"} />
          </Button>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sokoban</Text>
            <Text style={styles.subtitle}>par Darloub Games</Text>
          </View>
          <Button radius={50} onPress={() => navigation.navigate(CONST.SCREENS.BOARD_LIST)}>
            <Text style={styles.text}>JOUER</Text>
          </Button>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  settings: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1
  },
  settingsBtn: {
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
});

export default Home;
