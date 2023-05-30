import { Image, View } from "react-native";
import { charToImageSource } from "../helpers/sprites";
import CONST from "../CONST";

const Board = ({ board }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
      { board.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row'}}>
          { row.map((cell, cellIndex) => (
            <View key={cellIndex} style={{ width: CONST.IMG_WIDTH, height: CONST.IMG_HEIGHT }}>
              <Image source={ charToImageSource(cell) } />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export default Board;