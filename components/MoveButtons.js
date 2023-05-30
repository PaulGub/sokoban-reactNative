import { StyleSheet, View } from "react-native";
import Arrow from "./Arrow";
import CONST from "../CONST";

const MoveButtons = ({ handleMove }) => {
  return (
    <View style={styles.container}>
      <Arrow direction={CONST.DIRECTIONS.UP} callback={handleMove} />
      <View style={styles.rowContainer}>
        <Arrow direction={CONST.DIRECTIONS.BACK} callback={handleMove}/>
        <Arrow direction={CONST.DIRECTIONS.FORWARD} callback={handleMove}/>
      </View>
      <Arrow direction={CONST.DIRECTIONS.DOWN} callback={handleMove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },

  rowContainer: {
    flexDirection: "row",
    gap: 50
  },
});

export default MoveButtons;