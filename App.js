import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Playground from "./components/Playground";
import Home from "./components/Home";
import { Audio } from 'expo-av';
import Music from "./assets/audio/background_music.mp3";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    SplashScreen.preventAutoHideAsync()
        .catch(() => { /* Preventing auto hide is only available in bare workflow */ });

    useEffect(() => {
        (async () => {
            const { sound } = await Audio.Sound.createAsync(Music);
            await sound.setIsLoopingAsync(true);
            await sound.playAsync();
            await loadFonts();
        })();
    }, []);

    async function loadFonts() {
        await Font.loadAsync({
            'VT323': require('./assets/fonts/VT323-Regular.ttf'),
        });
        setIsReady(true);
        await SplashScreen.hideAsync();
    }

    if (!isReady) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"Home"} component={ Home } />
                <Stack.Screen name={"Playground"} component={ Playground } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
