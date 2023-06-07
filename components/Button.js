import React, { useRef } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import ClickSound from '../assets/audio/click_sound.mp3';

const Button = ({ onPress, children, colors = ['#FFA07A', '#FF4500'] }) => {
    const soundObject = useRef(new Audio.Sound());

    const playSound = async () => {
        try {
            await soundObject.current.unloadAsync();
            await soundObject.current.loadAsync(ClickSound);
            await soundObject.current.playAsync();
        } catch (error) {
            console.log(error);
        }
    };

    const handlePress = async () => {
        await playSound();
        onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <LinearGradient colors={colors} style={styles.gradient}>
                {children}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        shadowColor: "#CCC",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    gradient: {
        justifyContent: 'center',
        borderRadius: 25,
    },
});

export default Button;