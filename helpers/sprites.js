import Wall from "../assets/sprites/Wall_Beige.png";
import Floor from "../assets/sprites/Ground_Concrete.png";
import Box from "../assets/sprites/Crate_Brown.png";
import BoxValidate from "../assets/sprites/CrateDark_Brown.png";
import Destination from "../assets/sprites/EndPoint_Purple.png";
import CONST from "../CONST";

import CharacterUp from '../assets/sprites/Character7.png';
import CharacterDown from '../assets/sprites/Character4.png';
import CharacterForward from '../assets/sprites/Character2.png';
import CharacterBack from '../assets/sprites/Character1.png';

export const charToImageSource = (char) => {
  switch (char) {
    case CONST.SPRITES.WALL:
      return Wall;
    case CONST.SPRITES.FLOOR:
      return Floor;
    case CONST.SPRITES.CHARACTER:
      return CharacterDown;
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

export const imagesAnimated = {
  up: [ CharacterUp ],
  down: [ CharacterDown ],
  forward: [ CharacterForward ],
  back: [ CharacterBack ],
};