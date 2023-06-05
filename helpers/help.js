import CONST from "../CONST";

export const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
        case CONST.DIFFICULTY.EASY:
            return ['#D6FDD6', 'green'];
        case CONST.DIFFICULTY.NORMAL:
            return ['#FEF3C7', 'orange'];
        case CONST.DIFFICULTY.HARD:
            return ['#FED7D7', 'red'];
        default:
            return ['#FFF', '#CCC'];
    }
}