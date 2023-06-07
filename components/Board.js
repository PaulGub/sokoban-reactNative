import { Image, View, Animated, StyleSheet } from "react-native";
import { imagesAnimated, charToImageSource } from "../helpers/sprites";
import CONST from "../CONST";
import DefaultCharacterImage from "../assets/sprites/Character4.png"
const Board = ({ board, direction }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex}>
              {cell !== CONST.SPRITES.CHARACTER ?
                <Image source={charToImageSource(cell)} style={styles.image} /> :
                <Animated.Image
                  source={
                    direction
                      ? imagesAnimated[direction][0]
                      : DefaultCharacterImage
                  }
                  style={styles.image}
                />
              }
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