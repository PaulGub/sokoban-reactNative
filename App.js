import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Audio } from 'expo-av';
import Music from "./assets/audio/background_music.mp3";
import * as SplashScreen from 'expo-splash-screen';

import Playground from "./screens/Playground";
import Home from "./screens/Home";
import BoardList from "./screens/BoardList";
import CONST from "./CONST";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    SplashScreen.preventAutoHideAsync().catch((err) => {
        console.log(err)
    });

    useEffect(() => {
        (async () => {
            const { sound } = await Audio.Sound.createAsync(Music);
            await sound.setIsLoopingAsync(true);
            await sound.playAsync();
            setIsReady(true);
            await SplashScreen.hideAsync();
        })();
    }, []);

    if (!isReady) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={CONST.SCREENS.HOME} component={ Home } />
                <Stack.Screen name={CONST.SCREENS.BOARD_LIST} component={ BoardList } />
                <Stack.Screen name={CONST.SCREENS.PLAYGROUND} component={ Playground } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
