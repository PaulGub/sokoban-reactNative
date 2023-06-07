import { StyleSheet, View } from "react-native";
import Arrow from "./Arrow";
import Button from "./Button";
import { Ionicons } from '@expo/vector-icons';
import CONST from "../CONST";

const MoveButtons = ({ handleMove, resetGame }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Arrow direction={CONST.DIRECTIONS.UP} callback={handleMove} />
            </View>
            <View style={styles.rowContainer}>
                <Arrow direction={CONST.DIRECTIONS.BACK} callback={handleMove}/>
                <Button onPress={resetGame} colors={["#f0f0f0", "#e0e0e0"]}>
                    <Ionicons name={"md-refresh"} size={32} color="black" />
                </Button>
                <Arrow direction={CONST.DIRECTIONS.FORWARD} callback={handleMove}/>
            </View>
            <View style={styles.rowContainer}>
                <Arrow direction={CONST.DIRECTIONS.DOWN} callback={handleMove} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50
    },
});

export default MoveButtons;