import Wall from "../assets/sprites/Wall_Beige.png";
import Floor from "../assets/sprites/Ground_Concrete.png";
import Box from "../assets/sprites/Crate_Brown.png";
import BoxValidate from "../assets/sprites/CrateDark_Brown.png";
import Destination from "../assets/sprites/EndPoint_Purple.png";
import Character from "../assets/sprites/Character4.png";
import CONST from "../CONST";

const charToImageSource = (char) => {
  switch (char) {
    case CONST.SPRITES.WALL:
      return Wall;
    case CONST.SPRITES.FLOOR:
      return Floor;
    case CONST.SPRITES.CHARACTER:
      return Character;
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