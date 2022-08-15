import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

function Main({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>듣고 있어요</Text>
            <View style={styles.circle}>🎤</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontSize: 70,
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: "#627BFF",
        justifyContent: 'center',
        textAlign: 'center',
        width: 950,
        marginTop: 100,
        padding: 10,
        border: 0,
        borderRadius: 40,
    },

    circle: {
        fontSize: 200,
        paddingTop: 50,
        textAlign: 'center',
        position: 'absolute',
        borderColor: '#627BFF',
        backgroundColor: "#EDF0FF",
        bottom: 400,
        width: 400,
        height: 400,
        borderWidth: 10,
        borderRadius: 200,
    }
})

export default Main;