export default {
  IMG_WIDTH: 40,
  IMG_HEIGHT: 40,

  SCREENS: {
    HOME: 'Home',
    BOARD_LIST: 'BoardList',
    PLAYGROUND: 'Playground',
    SETTINGS: 'Settings'
  },

  DIRECTIONS: {
    BACK: 'back',
    UP: 'up',
    FORWARD: 'forward',
    DOWN: 'down'
  },

  SPRITES: {
    CHARACTER: 'C',
    DESTINATION: 'D',
    WALL: 'W',
    FLOOR: 'F',
    BOX: 'B',
    VALIDATED_BOX: 'V',
    EMPTY: 'E',
  },

  DIFFICULTY: {
    EASY: 'easy',
    NORMAL: 'normal',
    HARD: 'hard',
  },

  API_BASE_URI: 'https://sokoban-api.onrender.com/api',

  ENDPOINT: {
    BOARDS: "/boards"
  },

  WALL_COLORS: {
    BEIGE: 'beige',
    BROWN: 'brown',
    BLACK: 'black',
    GRAY: 'gray',
  },

  BOX_ENDPOINTS_COLORS: {
    BEIGE: 'beige',
    BROWN: 'brown',
    BLACK: 'black',
    GRAY: 'gray',
    RED: 'red',
    BLUE: 'blue',
    PURPLE: 'purple',
    YELLOW: 'yellow',
  },

  GROUND_COLORS: {
    CONCRETE: 'concrete',
    GRASS: 'grass',
    DIRT: 'dirt',
    SAND: 'sand',
    GRAVEL_CONCRETE: 'gravel_concrete',
    GRAVEL_GRASS: 'gravel_grass',
    GRAVEL_DIRT: 'gravel_dirt',
    GRAVEL_SAND: 'gravel_sand',
  },
}