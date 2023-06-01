import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import ClickSound from '../assets/audio/click_sound.mp3';

const CustomButton = ({ onPress, text }) => {
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

    const handlePress = () => {
        playSound();
        onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <LinearGradient
                colors={['#FFA07A', '#FF4500']}
                style={styles.gradient}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        shadowColor: "#CCC",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        alignSelf: 'center',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonText: {
        fontFamily: 'VT323',
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    },
});

export default CustomButton;