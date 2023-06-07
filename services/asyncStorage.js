import AsyncStorage from "@react-native-async-storage/async-storage";
import CONST from "../CONST";

export const getData = async (setWall, setBox, setDestination, setFloor) => {
  try {
    const wallColor = await AsyncStorage.getItem('wall')
    setWall(wallColor !== null ? wallColor : CONST.WALL_COLORS.BEIGE)
    const boxColor = await AsyncStorage.getItem('box')
    setBox(boxColor !== null ? boxColor : CONST.BOX_ENDPOINTS_COLORS.BROWN)
    const destinationColor = await AsyncStorage.getItem('destination')
    setDestination(destinationColor !== null ? destinationColor : CONST.BOX_ENDPOINTS_COLORS.PURPLE)
    const floorColor = await AsyncStorage.getItem('floor')
    setFloor(floorColor !== null ? floorColor : CONST.GROUND_COLORS.CONCRETE)
  } catch(e) {
    console.log(e)
  }
}