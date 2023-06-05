import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Title = ({ name, gradientColors, textColor }) => {
    return (
        <LinearGradient colors={gradientColors} style={{ paddingVertical: 15, margin: 20, borderRadius: 15 }}>
            <Text style={{ textTransform: 'uppercase', fontSize: 25, color: textColor, textAlign: 'center' }}>
                {name}
            </Text>
        </LinearGradient>
    );
};

export default Title;