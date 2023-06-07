import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { getBackgroundColor } from "../helpers/help";
import CONST from "../CONST";


const BoardItem = ({ board }) => {
    const navigation = useNavigation();
    const backgroundColor = getBackgroundColor(board.difficulty);

    const handlePress = () => {
        navigation.navigate(CONST.SCREENS.PLAYGROUND, { boardId: board.id });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.boardContainer]}>
                <Button onPress={handlePress} colors={backgroundColor} >
                    <Text style={styles.text}>{board.name}</Text>
                </Button>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boardContainer: {
        margin: 5,
        padding: 5,
    },
    text: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        textTransform: "uppercase",
        paddingHorizontal: 10,
        paddingVertical: 15
    },
});

export default BoardItem;