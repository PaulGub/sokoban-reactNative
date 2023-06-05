import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import {getBackgroundColor} from "../helpers/help";


const BoardItem = ({ board }) => {
    const navigation = useNavigation();
    const backgroundColor = getBackgroundColor(board.difficulty);

    const handlePress = () => {
        navigation.navigate('Playground', { boardId: board.id });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.boardContainer]}>
                <Button onPress={handlePress} text={board.name} colors={backgroundColor} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boardContainer: {
        margin: 5,
        padding: 5,
    },
});

export default BoardItem;