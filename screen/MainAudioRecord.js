import React, { Component, useEffect, useRef, useState } from 'react'
import { Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av'
import axios from 'axios'

function MainAudioRecord({navigation}) {
  const [recording, setRecording] = React.useState();
  const fadeAnim =  useRef(new Animated.Value(1)).current;

  let Fading = false;

  const FadeInOutView = (Fading) => {
    if (Fading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 750,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.9,
            duration: 750,
            useNativeDriver: true,
          })
        ])
      ).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
      FadeInOutView(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    // console.log(recording)
    const uri = recording.getURI(); 
    // console.log('Recording stopped and stored at', uri);

    const uploadAudio = async () => {
      
      const filename = uri.split('/').pop()
      let formData = new FormData()
      formData.append('file', {
        uri : uri,
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
      await fetch('http://127.0.0.1:5000/upload',options)

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

    navigation.navigate("Result", {URI:uri});
    uploadAudio();
    FadeInOutView(false)
  }

  return (
      <View style={styles.container}>
          <View style={styles.titlebox}>
              <View>
                <Animated.Text style={[
                styles.title,{
                opacity: fadeAnim,
                }
                ]}>듣고 있어요</Animated.Text>
              </View>
          </View>
          <View style={styles.outerCircle}>
            <Animated.View style={[
              styles.innerCircle, {
                opacity: fadeAnim,
              }
              ]}>
              <TouchableOpacity
                  onPress={recording ? stopRecording : startRecording}>
                  <FontAwesome style={styles.mic} name="microphone" size={30} color="black" />
              </TouchableOpacity>
            </Animated.View>
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

  outerCircle: {
      position: 'absolute',
      alignItems: 'center',
      backgroundColor: '#B8C3FF',
      bottom: '-38%',
      width: '170%',
      height: '80%',
      borderColor: '#E2E5FF',
      borderWidth: '15%',
      // borderWidth: 30,
      borderRadius: '15000%',
  },

  innerCircle: {
      position: 'absolute',
      backgroundColor: "#E2E7FF",
      // bottom: 400,
      bottom: '60%',
      // width: 400,
      width: "23%",
      // height: 400,
      height: "23%",
      borderColor: '#627BFF',
      borderWidth: 7,
      borderRadius: 150,
  },

  mic: {
      // fontSize: 200,
      padding: "28%",
      fontSize: 60,
      justifyContent: 'center',
      textAlign: 'center',
  }
})

export default MainAudioRecord;