import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationHelpersContext } from '@react-navigation/native';
import { Audio } from 'expo-av'

function MainAudioRecord({navigation}) {
  const [recording, setRecording] = React.useState();

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
         Audio.RecordingOptionsPresets 
      );
      setRecording(recording);
      console.log('Recording started');
      count = true;
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
    navigation.navigate("Result");
  }

  return (
      <View style={styles.container}>
          <View style={styles.titlebox}>
              <Text style={styles.title}>듣고 있어요</Text>
          </View>
          <View style={styles.outerCircle}>
              {/* <Button style={styles.innerCircle}>
                  <FontAwesome style={styles.mic} name="microphone" size={30} color="black" />
              </Button> */}
              <TouchableOpacity style={styles.innerCircle}
                  onPress={recording ? stopRecording : startRecording}>
                  <FontAwesome style={styles.mic} name="microphone" size={30} color="black" />
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
      borderRadius: '15000%'
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