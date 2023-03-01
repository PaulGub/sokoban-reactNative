import React from 'react';
import {Text, View} from 'react-native';

const Title = ({name, subName}) => {
    return (
        <View className={" bg-sky-500 py-10 "}>
            <Text className={"uppercase text-4xl text-stone-50 text-center"}>{name}</Text>
            <Text className={"text-stone-50 text-center italic"}>{subName}</Text>
        </View>
    );
};

export default Title;
