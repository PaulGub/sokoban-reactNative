import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../assets/images/background2.jpg";
import Button from "../components/Button";
import CONST from "../CONST";
import {boxImages, destinationImages, floorImages, wallImages} from "../helpers/sprites";
import {useEffect, useState} from "react";
import AssetSetting from "../components/AssetSetting";
import { getData } from "../services/asyncStorage";

const Settings = ({ navigation }) => {
  const [wall, setWall] = useState('');
  const [box, setBox] = useState('');
  const [destination, setDestination] = useState('');
  const [floor, setFloor] = useState('');

  useEffect(() => {
    getData(setWall, setBox, setDestination, setFloor);
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('wall', wall);
      await AsyncStorage.setItem('box', box);
      await AsyncStorage.setItem('floor', floor);
      await AsyncStorage.setItem('destination', destination);
      navigation.navigate(CONST.SCREENS.HOME);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ImageBackground source={Background} style={styles.imageBackground}>
      <View style={styles.settings}>
        <View style={styles.container}>
          <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 30 }}>Paramètres</Text>
          <AssetSetting
            title={"Mur"}
            radius={0}
            callback={(color) => setWall(color)}
            colorList={CONST.WALL_COLORS}
            currentColor={wall}
            imageList={wallImages}
          />
          <AssetSetting
            title={"Sol"}
            radius={0}
            callback={(color) => setFloor(color)}
            colorList={CONST.GROUND_COLORS}
            currentColor={floor}
            imageList={floorImages}
          />
          <AssetSetting
            title={"Boîte"}
            radius={10}
            callback={(color) => setBox(color)}
            colorList={CONST.BOX_ENDPOINTS_COLORS}
            currentColor={box}
            imageList={boxImages}
          />
          <AssetSetting
            title={"Destination"}
            radius={30}
            callback={(color) => setDestination(color)}
            colorList={CONST.BOX_ENDPOINTS_COLORS}
            currentColor={destination}
            imageList={destinationImages}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={handleSave} radius={10} colors={['#D6FDD6', 'green']}>
          <Text style={styles.btnText}>Enregistrer</Text>
        </Button>
        <Button radius={10} onPress={() => navigation.navigate(CONST.SCREENS.HOME)} colors={['#dadada', 'gray']}>
          <Text style={styles.btnText}>Annuler</Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  settings: {
    marginTop: 20,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 30,
    margin: 20,
    gap: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
    gap: 30
  },
  btnText: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 16,
    color: "#FFF"
  }
});

export default Settings;