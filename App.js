import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View, Text} from "react-native";
import Title from "./components/Title";

export default function App() {
    return (

        <View>
            <Title name={"SOKOBAN APP"} subName={"par Théo Jamard & Paul Gubbiotti"}></Title>
        </View>
    );
}