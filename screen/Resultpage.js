import React, { Component, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av'
import { CommonActions } from '@react-navigation/native';
import * as Speech from 'expo-speech';

function Resultpage({navigation, route}) {
    const sendedData = route.params.URI;
    // console.log("이게 음원파일입니다." + sendedData);
    const [ thingToSay, setThingToSay ] = useState("텍스트를 눌러 들어보세요.");

    useEffect(() => {
        setThingToSay();
    }, []);

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleBox} onPress={() => navigation.navigate("MainAudioRecord")}>
                <Text style={styles.button}>←</Text>
                <Text style={styles.title}>결과 텍스트</Text>
            </TouchableOpacity>
            <View style={styles.textBox}>
                <TouchableOpacity style={styles.speakBox} onPress={() => Speech.speak(thingToSay)}>
                    {thingToSay === undefined ? (
                        <ActivityIndicator size="large" />
                    ) : (
                        <Text style={styles.outText}>{thingToSay}</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    titleBox: {
        flexDirection: 'row',
        backgroundColor: "#627BFF",
        // width: 950,
        width: "90%",
        marginTop: 100,
        padding: 10,
        border: 0,
        borderRadius: 20,
    },
    
    button: {
        width: '10%',
        // fontSize: 70,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    title: {
        width: "40%",
        // fontSize: 70,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: "22%"
    },

    textBox: {
        marginTop: "45%"
    },

    outText: {
        fontSize: 20
    }

    // speakBox: {
        
    // }
})


export default Resultpage;