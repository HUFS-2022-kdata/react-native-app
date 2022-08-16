import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Resultpage({navigation}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleBox} onPress={() => navigation.navigate("Main")}>
                <Text style={styles.button}>←</Text>
                <Text style={styles.title}>결과 텍스트</Text>
            </TouchableOpacity>
            <View style={styles.textBox}>
                <Text style={styles.outText}>여기에 텍스트가 출력될 거에요.</Text>
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
        marginTop: "40%"
    },

    outText: {
        fontSize: 20
    }
})


export default Resultpage;