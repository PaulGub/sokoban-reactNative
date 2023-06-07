import { StyleSheet, View } from "react-native";
import Arrow from "./Arrow";
import Button from "./Button";
import { Ionicons } from '@expo/vector-icons';
import CONST from "../CONST";
import { useNavigation } from "@react-navigation/native";

const MoveButtons = ({ handleMove, resetGame }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Arrow direction={CONST.DIRECTIONS.UP} callback={handleMove} />
      </View>
      <View style={styles.rowContainer}>
        <Arrow direction={CONST.DIRECTIONS.BACK} callback={handleMove}/>
        <Arrow direction={CONST.DIRECTIONS.FORWARD} callback={handleMove}/>
      </View>
      <View style={styles.rowContainer}>
        <Arrow direction={CONST.DIRECTIONS.DOWN} callback={handleMove} />
      </View>
      <View style={styles.listBtn}>
        <Button onPress={() => navigation.navigate(CONST.SCREENS.BOARD_LIST)} radius={50}>
          <Ionicons style={styles.icon} name={"md-list"} size={32} color="white" />
        </Button>
      </View>
      <View style={styles.resetBtn}>
        <Button onPress={resetGame} radius={50}>
          <Ionicons style={styles.icon} name={"md-refresh"} size={32} color="white" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    marginTop: 20
  },
  rowContainer: {
    flexDirection: "row",
    gap: 50
  },
  listBtn: {
    position: "absolute",
    top: 0,
    left: 20
  },
  resetBtn: {
    position: "absolute",
    top: 0,
    right: 20
  },
  icon: {
    padding: 15
  }
});

export default MoveButtons;