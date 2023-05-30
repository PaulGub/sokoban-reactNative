import Wall from "../assets/sprites/wall.png";
import Floor from "../assets/sprites/floor.png";
import Box from "../assets/sprites/box.png";
import BoxValidate from "../assets/sprites/boxValidate.png";
import Destination from "../assets/sprites/destination.png";
import CharacterWalking1 from "../assets/sprites/characterWalking_1.png";
import CharacterWalking2 from "../assets/sprites/characterWalking_2.png";
import CharacterWalking3 from "../assets/sprites/characterWalking_3.png";
import CharacterWalkingUp1 from "../assets/sprites/characterWalkingUp_1.png";
import CharacterWalkingUp2 from "../assets/sprites/characterWalkingUp_2.png";
import CharacterWalkingUp3 from "../assets/sprites/characterWalkingUp_3.png";
import CONST from "../CONST";

const chooseCharacterRandomly = () => {
  const characterWalkingSprites = [
    CharacterWalking1,
    CharacterWalking2,
    CharacterWalking3,
    CharacterWalkingUp1,
    CharacterWalkingUp2,
    CharacterWalkingUp3,
  ];

  const randomIndex = Math.floor(Math.random() * characterWalkingSprites.length);
  return characterWalkingSprites[randomIndex];
};


const charToImageSource = (char) => {
  switch (char) {
    case CONST.SPRITES.WALL:
      return Wall;
    case CONST.SPRITES.FLOOR:
      return Floor;
    case CONST.SPRITES.CHARACTER:
      return CharacterWalking1;
    case CONST.SPRITES.BOX:
      return Box;
    case CONST.SPRITES.VALIDATED_BOX:
      return BoxValidate;
    case CONST.SPRITES.DESTINATION:
      return Destination;
    default:
      return Floor;
  }
}

export {
  charToImageSource
}