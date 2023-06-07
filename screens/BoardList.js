import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground, ActivityIndicator} from "react-native";
import sokobanApi from "../services/sokobanApi";
import CONST from "../CONST";
import BoardItem from '../components/BoardItems';
import Background from '../assets/images/background2.jpg'

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await sokobanApi.get(CONST.ENDPOINT.BOARDS);
                setBoards(result.data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching boards:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background} style={styles.imageBackground}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.textContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Choisissez votre niveau</Text>
                            <Text style={styles.description}>
                                Explorez une variété de niveaux, du plus facile au plus difficile.
                                Choisissez le niveau qui correspond le mieux à votre compétence et votre humeur.
                            </Text>
                        </View>
                    </View>
                    {
                        !loading ?
                          boards.map((board) => (
                                <BoardItem key={board.id} board={board} />
                              )) :
                          <View style={styles.loaderContainer}>
                              <ActivityIndicator size="large" />
                          </View>
                    }
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    loaderContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    scrollView: {
        paddingVertical: 50
    },
    textContainer: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 10,
        padding: 10,
        margin: 20,
    },
    titleContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        marginTop: 10,
        fontSize: 18,
        color: '#666'
    },
});

export default BoardList;