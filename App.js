import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Playground from "./components/Playground";
import Home from "./components/Home";
import { Audio } from 'expo-av';

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        (async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('./assets/audio/background_music.mp3') // Changed this line
            );

            await sound.playAsync();
        })();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={ Home } />
                <Stack.Screen name={"Playground"} component={ Playground } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
