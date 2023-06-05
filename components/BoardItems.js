// BoardItem.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';

const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
        case 'easy':
            return ['#D6FDD6', 'green'];
        case 'medium':
            return ['#FEF3C7', 'yellow'];
        case 'hard':
            return ['#FED7D7', 'red'];
        default:
            return ['#FFF', '#CCC'];
    }
}

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