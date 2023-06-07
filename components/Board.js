import { Image, View, StyleSheet } from "react-native";
import { charToImageSource } from "../helpers/sprites";
import CONST from "../CONST";

const Board = ({ board, direction, boxColor, destinationColor, wallColor, floorColor }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex}>
              <Image source={charToImageSource(cell, direction, boxColor, destinationColor, wallColor, floorColor)} style={styles.image} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },

  row: {
    flexDirection: 'row'
  },

  image: {
    width: CONST.IMG_WIDTH,
    height: CONST.IMG_HEIGHT,
  },
});

export default Board;