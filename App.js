import React from 'react';
import { View, Image } from "react-native";
import Title from "./components/Title";
import Wall from "./assets/sprites/box.png";
import Empty from "./assets/sprites/empty.png";
import Character from "./assets/sprites/characterWalking_1.png";

export default function App() {

    const board = [
        ['W','W','W','W','W','W','W','W'],
        ['W','E','E','E','E','E','E','W'],
        ['W','E','E','E','E','E','E','W'],
        ['W','E','E','C','E','E','E','W'],
        ['W','E','E','E','E','E','E','W'],
        ['W','W','W','W','W','W','W','W'],
    ]

    const strToImage = (str) => {
        switch (str) {
            case 'W':
                return <Image source={Wall} />;
            case 'E':
                return <Image source={Empty} />;
            case 'C':
                return <Image source={Character} />;
            default:
                return null;
        }
    }

    return (
      <View style={{ backgroundColor: '#c4d4d4' }}>
          <Title name={"SOKOBAN APP"} subName={"par Théo Jamard & Paul Gubbiotti"}></Title>
          {board.map((row, index) => (
            <View key={index} style={{ flexDirection: 'row'}}>
                {row.map((cell, index) => (
                  <View key={index} style={{ width: 40, height: 54 }}>
                      {strToImage(cell)}
                  </View>
                ))}
            </View>
          ))}
      </View>
    );
}
