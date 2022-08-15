import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

function Main({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.titlebox}>
                <Text style={styles.title}>듣고 있어요</Text>
            </View>
            <View style={styles.circle}>
                <Text style={styles.mic}>🎤</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    titlebox: {
        backgroundColor: "#627BFF",
        // width: 950,
        width: "90%",
        marginTop: 100,
        padding: 10,
        border: 0,
        borderRadius: 20,
    },

    title: {
        // fontSize: 70,
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#ffffff',
    },

    circle: {
        position: 'absolute',
        borderColor: '#627BFF',
        backgroundColor: "#EDF0FF",
        // bottom: 400,
        bottom: "20%",
        // width: 400,
        width: "40%",
        // height: 400,
        height: "18%",
        borderWidth: 10,
        borderRadius: 200,
    },

    mic: {
        // fontSize: 200,
        padding: "20%",
        fontSize: 60,
        justifyContent: 'center',
        textAlign: 'center',
    }
})

export default Main;