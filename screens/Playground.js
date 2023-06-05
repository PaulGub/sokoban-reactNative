import { useEffect, useState } from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {
  findSpritesPosition, isComplete,
  isFloorOrDestination,
  moveCharacter,
  moveCharacterAndBox,
  nextSpritePosition
} from "../helpers/game";
import CONST from "../CONST";
import MoveButtons from "../components/MoveButtons";
import Board from "../components/Board";
import Ground from "../assets/sprites/Ground_Concrete.png";
import DialogModal from "../components/DialogModal";
import sokobanApi from "../services/sokobanApi";
import Title from "../components/Title";
import {getBackgroundColor} from "../helpers/help";

const Playground = ({ navigation, route }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [boardApi, setBoardApi] = useState({});
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCharacterPosition, setCurrentCharacterPosition] = useState({});
  const [lastMove, setLastMove] = useState(CONST.SPRITES.FLOOR);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardId = route.params.boardId;
        const result = await sokobanApi.get(`${CONST.ENDPOINT.BOARDS}/${boardId}`);
        setBoardApi(result.data);
        setBoard(result.data.rows);
        setCurrentCharacterPosition(findSpritesPosition(result.data.rows, CONST.SPRITES.CHARACTER));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching board:", error);
      }
    };

    fetchData();
  }, [route.params?.boardId]);

  const handleMove = (direction) => {
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
      setModalVisible(true)
    }
  }

  const handleCloseModal = () => {
    navigation.navigate('Playground', { boardId: boardApi.nextBoardId });
    setModalVisible(false);
  }

  return (
    <ImageBackground source={Ground} imageStyle={{ resizeMode: 'repeat' }} style={styles.backgroundImage}>
      {
        !loading ?
          <View style={styles.container}>

            <View style={styles.playground}>
              <Title name={boardApi.name} gradientColors={getBackgroundColor(boardApi.difficulty)} textColor="white"></Title>
              <Board board={board} />
              <MoveButtons handleMove={handleMove} />
            </View>
            <DialogModal modalVisible={modalVisible} modalText={"Niveau Complété !"} closeModal={handleCloseModal} btnText={"Suivant"} />
          </View> :
          <></>
      }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backgroundImage: {
    height: '100%',
  },

  playground: {
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 30,
  }
})

export default Playground;