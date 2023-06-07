import WallBeige from "../assets/sprites/Wall_Beige.png";
import WallBrown from "../assets/sprites/Wall_Brown.png";
import WallBlack from "../assets/sprites/Wall_Black.png";
import WallGray from "../assets/sprites/Wall_Gray.png";

import FloorConcrete from "../assets/sprites/Ground_Concrete.png";
import FloorGrass from "../assets/sprites/Ground_Grass.png";
import FloorDirt from "../assets/sprites/Ground_Dirt.png";
import FloorSand from "../assets/sprites/Ground_Sand.png";
import FloorGravelConcrete from "../assets/sprites/GroundGravel_Concrete.png";
import FloorGravelGrass from "../assets/sprites/GroundGravel_Grass.png";
import FloorGravelDirt from "../assets/sprites/GroundGravel_Dirt.png";
import FloorGravelSand from "../assets/sprites/GroundGravel_Sand.png";

import BoxBeige from "../assets/sprites/Crate_Beige.png";
import BoxBrown from "../assets/sprites/Crate_Brown.png";
import BoxBlack from "../assets/sprites/Crate_Black.png";
import BoxGray from "../assets/sprites/Crate_Gray.png";
import BoxRed from "../assets/sprites/Crate_Red.png";
import BoxBlue from "../assets/sprites/Crate_Blue.png";
import BoxPurple from "../assets/sprites/Crate_Purple.png";
import BoxYellow from "../assets/sprites/Crate_Yellow.png";

import BoxBeigeValidate from "../assets/sprites/CrateDark_Beige.png";
import BoxBrownValidate from "../assets/sprites/CrateDark_Brown.png";
import BoxBlackValidate from "../assets/sprites/CrateDark_Black.png";
import BoxGrayValidate from "../assets/sprites/CrateDark_Gray.png";
import BoxRedValidate from "../assets/sprites/CrateDark_Red.png";
import BoxBlueValidate from "../assets/sprites/CrateDark_Blue.png";
import BoxPurpleValidate from "../assets/sprites/CrateDark_Purple.png";
import BoxYellowValidate from "../assets/sprites/CrateDark_Yellow.png";

import DestinationBeige from "../assets/sprites/EndPoint_Beige.png";
import DestinationBrown from "../assets/sprites/EndPoint_Brown.png";
import DestinationBlack from "../assets/sprites/EndPoint_Black.png";
import DestinationGray from "../assets/sprites/EndPoint_Gray.png";
import DestinationRed from "../assets/sprites/EndPoint_Red.png";
import DestinationBlue from "../assets/sprites/EndPoint_Blue.png";
import DestinationPurple from "../assets/sprites/EndPoint_Purple.png";
import DestinationYellow from "../assets/sprites/EndPoint_Yellow.png";

import CharacterUp from '../assets/sprites/Character7.png';
import CharacterDown from '../assets/sprites/Character4.png';
import CharacterForward from '../assets/sprites/Character2.png';
import CharacterBack from '../assets/sprites/Character1.png';

import CONST from "../CONST";

const characterImages = {
  up: CharacterUp,
  down: CharacterDown,
  forward: CharacterForward,
  back: CharacterBack
};

export const wallImages = {
  beige: WallBeige,
  brown: WallBrown,
  black: WallBlack,
  gray: WallGray
}

export const boxImages = {
  beige: BoxBeige,
  brown: BoxBrown,
  black: BoxBlack,
  gray: BoxGray,
  red: BoxRed,
  blue: BoxBlue,
  purple: BoxPurple,
  yellow: BoxYellow
}

export const boxValidateImages = {
  beige: BoxBeigeValidate,
  brown: BoxBrownValidate,
  black: BoxBlackValidate,
  gray: BoxGrayValidate,
  red: BoxRedValidate,
  blue: BoxBlueValidate,
  purple: BoxPurpleValidate,
  yellow: BoxYellowValidate
}

export const destinationImages = {
  beige: DestinationBeige,
  brown: DestinationBrown,
  black: DestinationBlack,
  gray: DestinationGray,
  red: DestinationRed,
  blue: DestinationBlue,
  purple: DestinationPurple,
  yellow: DestinationYellow
}

export const floorImages = {
  concrete: FloorConcrete,
  grass: FloorGrass,
  dirt: FloorDirt,
  sand: FloorSand,
  gravel_concrete: FloorGravelConcrete,
  gravel_grass: FloorGravelGrass,
  gravel_dirt: FloorGravelDirt,
  gravel_sand: FloorGravelSand
}

export const charToImageSource = (char, direction, boxColor, destinationColor, wallColor, floorColor) => {
  switch (char) {
    case CONST.SPRITES.WALL:
      return wallImages[wallColor];
    case CONST.SPRITES.FLOOR:
      return floorImages[floorColor];
    case CONST.SPRITES.CHARACTER:
      return direction ? characterImages[direction] : CharacterDown;
    case CONST.SPRITES.BOX:
      return boxImages[boxColor];
    case CONST.SPRITES.VALIDATED_BOX:
      return boxValidateImages[boxColor];
    case CONST.SPRITES.DESTINATION:
      return destinationImages[destinationColor];
    default:
      return floorImages[floorColor];
  }
}