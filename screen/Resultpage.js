import React, { Component, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, NativeModules } from 'react-native';
import { Audio } from 'expo-av'
import { CommonActions } from '@react-navigation/native';
import * as Speech from 'expo-speech';

function Resultpage({navigation, route}) {
    const sendedData = route.params.URI;
    // console.log("이게 음원파일입니다." + sendedData);
    const [ thingToSay, setThingToSay ] = useState(undefined);

    const getDevServerAddress = () => {
        const scriptURL = NativeModules.SourceCode.scriptURL;
        const address = scriptURL.split('://')[1].split('/')[0];
        const hostname = address.split(':')[0];
        return hostname;
    };

    const uploadAudio = async () => {
      
      const filename = sendedData.split('/').pop()
      let formData = new FormData()
      formData.append('file', {
        uri : sendedData,
        name : filename,
        type : 'audio/m4a'
      })
      let options = {
        method: "POST",
        body: formData,
        headers: {
          Accpet: "application/json",
          "Content-Type": "multipart/form-data"
        }
      }
        // // in localhost env
        // await fetch('http://127.0.0.1:5000:5000/upload',options)
        // in mobile env
        await fetch('http://'+getDevServerAddress()+':5000/upload',options)
        .then((response) => response.json())
        .then((json) => {
            setThingToSay(json['text'])
            console.log(json['text'])
        })
        .catch((error) => {
          console.log(error);
        });

      // await axios.post({
      //   method: 'post',
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type" : "multipart/form-data"
      //   },
      //   // transformRequest: formData => formData,
      //   url: 'http://127.0.0.1:5000/upload',
      //   body: formData
      // }).then(function(response) {
      //   console.log(response);
      // }).catch(function(error) {
      //   console.log(error);
      // });
      
    }

    useEffect(() => {
        uploadAudio()
    });

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
        flex: 1,
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
        flex: 16,
        paddingHorizontal: "13%",
        marginTop: "45%"
    },

    outText: {
        fontSize: 20
    }

})


export default Resultpage;
