import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, ImageBackground, StyleSheet, View } from "react-native";
import { findSpritesPosition, isComplete, isFloorOrDestination, moveCharacter, moveCharacterAndBox, nextSpritePosition, secondsToReadable } from "../helpers/game";
import CONST from "../CONST";
import MoveButtons from "../components/MoveButtons";
import Board from "../components/Board";
import DialogModal from "../components/DialogModal";
import sokobanApi from "../services/sokobanApi";
import Title from "../components/Title";
import { getBackgroundColor } from "../helpers/colors";
import Confetti from "react-native-confetti";
import { floorImages } from "../helpers/sprites";
import { getData } from "../services/asyncStorage";

const Playground = ({ navigation, route }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [boardApi, setBoardApi] = useState({ nextBoardId: null, difficulty: '' });
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCharacterPosition, setCurrentCharacterPosition] = useState({});
  const [lastMove, setLastMove] = useState(CONST.SPRITES.FLOOR);
  const [clickedDirection, setClickedDirection] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false)
  const confettiRef = useRef();

  const [wall, setWall] = useState('');
  const [box, setBox] = useState('');
  const [destination, setDestination] = useState('');
  const [floor, setFloor] = useState('');

  useEffect(() => {
    setSeconds(0);
    fetchData();
    getData(setWall, setBox, setDestination, setFloor);
  }, [route.params?.boardId]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLevelComplete) {
        setSeconds(seconds => seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isLevelComplete]);

  const fetchData = async () => {
    const boardId = route.params.boardId;
    const result = await sokobanApi.get(`${CONST.ENDPOINT.BOARDS}/${boardId}`);
    setBoardApi(result.data);
    setBoard(result.data.rows);
    setCurrentCharacterPosition(findSpritesPosition(result.data.rows, CONST.SPRITES.CHARACTER));
    setLoading(false);
    setIsLevelComplete(false);
  };

  const resetGame = async () => {
    setLoading(true);
    setSeconds(0);
    await fetchData();
    setLoading(false);
  };

  const handleMove = (direction) => {
    setClickedDirection(direction);
    const characterWantedPosition = nextSpritePosition(direction, currentCharacterPosition);
    const characterWantedPositionValue = board[characterWantedPosition.row][characterWantedPosition.col];
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
      setIsLevelComplete(true);
      setModalVisible(true)
      confettiRef.current.startConfetti();
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    confettiRef.current.stopConfetti();
    setLoading(true);
    boardApi.nextBoardId ?
      navigation.navigate(CONST.SCREENS.PLAYGROUND, { boardId: boardApi.nextBoardId }) :
      navigation.navigate(CONST.SCREENS.BOARD_LIST);
  }

  return (
      <ImageBackground source={floorImages[floor]} imageStyle={{ resizeMode: 'repeat' }} style={styles.backgroundImage}>
        {
          !loading ?
              <View style={styles.container}>
                <View style={styles.playground}>
                  <Title name={boardApi.name} gradientColors={getBackgroundColor(boardApi.difficulty)} textColor="white" subtitle={`Time: ${secondsToReadable(seconds)}`} />
                  <Board board={board} direction={clickedDirection} wallColor={wall} boxColor={box} destinationColor={destination} floorColor={floor} />
                  <MoveButtons handleMove={handleMove} resetGame={resetGame} />
                </View>
                <DialogModal modalVisible={modalVisible} modalText={"Niveau Complété !"} closeModal={handleCloseModal} btnText={"Suivant"} />
                <Confetti ref={confettiRef} />
              </View> :
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" />
              </View>
        }
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  backgroundImage: {
    height: '100%',
  },
  playground: {
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 30,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timer: {
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default Playground;
