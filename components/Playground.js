import { useState } from "react";
import {ImageBackground, StyleSheet, View} from "react-native";
import {
  findSpritesPosition, isComplete,
  isFloorOrDestination,
  moveCharacter,
  moveCharacterAndBox,
  nextSpritePosition
} from "../helpers/game";
import CONST from "../CONST";
import MoveButtons from "./MoveButtons";
import Board from "./Board";
import Ground from "../assets/sprites/Ground_Concrete.png";

const Playground = () => {

  const [board, setBoard] = useState([
    ['W','W','W','W','W','W','W','W','W'],
    ['W','F','F','F','F','F','F','F','W'],
    ['W','F','B','F','F','D','F','F','W'],
    ['W','F','F','C','F','F','F','F','W'],
    ['W','F','F','F','F','B','F','D','W'],
    ['W','W','W','W','W','W','W','W','W'],
  ])

  const [currentCharacterPosition, setCurrentCharacterPosition] = useState(findSpritesPosition(board, CONST.SPRITES.CHARACTER));
  const [lastMove, setLastMove] = useState(CONST.SPRITES.FLOOR)

  const handleMove = (direction) => {
    const characterWantedPosition = nextSpritePosition(direction, currentCharacterPosition)
    const characterWantedPositionValue = board[characterWantedPosition.row][characterWantedPosition.col]
    let updatedBoard = board;

    if (isFloorOrDestination(characterWantedPositionValue)) {
      updatedBoard = moveCharacter(lastMove, characterWantedPosition, currentCharacterPosition, board)
      setBoard(updatedBoard)
      setLastMove(characterWantedPositionValue)
      setCurrentCharacterPosition(characterWantedPosition)
    } else if (characterWantedPositionValue === CONST.SPRITES.BOX || characterWantedPositionValue === CONST.SPRITES.VALIDATED_BOX) {
      const boxWantedPosition = nextSpritePosition(direction, characterWantedPosition)
      const boxWantedPositionValue = board[boxWantedPosition.row][boxWantedPosition.col]

      if (isFloorOrDestination(boxWantedPositionValue)) {
        updatedBoard = moveCharacterAndBox(lastMove, characterWantedPosition, boxWantedPosition, boxWantedPositionValue, currentCharacterPosition, board)
        setBoard(updatedBoard)
        setLastMove(characterWantedPositionValue === CONST.SPRITES.VALIDATED_BOX ? CONST.SPRITES.DESTINATION : CONST.SPRITES.FLOOR)
        setCurrentCharacterPosition(characterWantedPosition)
      }
    }

    if (isComplete(updatedBoard)) {
      console.log('gg ez')
    }
  }

  return (
    <ImageBackground source={Ground} imageStyle={{ resizeMode: 'repeat' }} style={styles.backgroundImage}>
      <View style={styles.playground}>
        <Board board={board} />
        <MoveButtons handleMove={handleMove} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
  },

  playground: {
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 10,
  }
})

export default Playground;