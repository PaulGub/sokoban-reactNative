import CONST from "../CONST";

export const isFloorOrDestination = (wantedPositionValue) => {
  return wantedPositionValue === CONST.SPRITES.FLOOR || wantedPositionValue === CONST.SPRITES.DESTINATION;
};

export const nextSpritePosition = (direction, currentPosition) => {
  switch (direction) {
    case CONST.DIRECTIONS.UP:
      return { row: currentPosition.row - 1, col: currentPosition.col }
    case CONST.DIRECTIONS.DOWN:
      return { row: currentPosition.row + 1, col: currentPosition.col }
    case CONST.DIRECTIONS.BACK:
      return { row: currentPosition.row, col: currentPosition.col - 1 }
    case CONST.DIRECTIONS.FORWARD:
      return { row: currentPosition.row, col: currentPosition.col + 1 }
    default:
      return null;
  }
}

export const findSpritesPosition = (board, sprite) => {
  const positions = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === sprite) {
        positions.push({ row: row, col: col });
      }
    }
  }

  if (positions.length === 0) {
    return null;
  } else if (positions.length === 1) {
    return positions[0];
  } else {
    return positions;
  }
};

export const moveCharacter = (lastMove, characterWantedPosition, currentCharacterPosition, board) => {
  const newBoard = board.map(row => [...row]);

  newBoard[currentCharacterPosition.row][currentCharacterPosition.col] = lastMove;

  newBoard[characterWantedPosition.row][characterWantedPosition.col] = CONST.SPRITES.CHARACTER;

  return newBoard;
}

export const moveCharacterAndBox = (lastMove, characterWantedPosition, boxWantedPosition, boxWantedPositionValue, currentCharacterPosition, board) => {
  const newBoard = board.map(row => [...row]);
  newBoard[currentCharacterPosition.row][currentCharacterPosition.col] = lastMove;
  newBoard[characterWantedPosition.row][characterWantedPosition.col] = CONST.SPRITES.CHARACTER;
  newBoard[boxWantedPosition.row][boxWantedPosition.col] = boxWantedPositionValue === CONST.SPRITES.DESTINATION ? CONST.SPRITES.VALIDATED_BOX : CONST.SPRITES.BOX;
  return newBoard;
}


export const isComplete = (board) => {
  return findSpritesPosition(board, CONST.SPRITES.BOX) === null
}

export const secondsToReadable = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = "";
  if (hours > 0) {
    result += hours + "h ";
  }
  if (minutes > 0) {
    result += minutes + "m ";
  }
  if (remainingSeconds > 0 || result === "") {
    result += remainingSeconds + "s";
  }

  return result.trim();
}