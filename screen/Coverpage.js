import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import AppLoding from 'expo-app-loading';

function Coverpage({navigation}) {

  useEffect(() => {
    let id = setTimeout(() => {
      navigation.navigate("MainAudioRecord")
    }, 3000);

    return () => {
      clearTimeout(id);
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.appTitle}>
          <Text style={styles.appTitleFont}>Mallang!</Text>
        </View>
        <View style={styles.appSubTitle}>
          <Text style={styles.appSubTitleFont}>구음장애인을 위한{"\n"}음성 인식 서비스</Text>
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  )
}

const width_per = "30%";
const height_per = "10%";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    content: {
      height: "100%",
      backgroundColor: '#627BFF',
    },
    
    footer: {
      position: 'absolute',
      bottom: 0,
      // width: 1080,
      width: "100%",
      height: "5%",
      // borderBottomWidth: 250,
      borderBottomWidth: "130%",
      borderBottomColor: '#ffffff',
      // borderLeftWidth: 1080,
      borderLeftWidth: "400%",
      borderLeftColor: '#627BFF',
      borderStyle: 'solid'
    },
  
    appTitle: {
      position: 'absolute',
      // width: 750,
      width: "60%",
      // height: 200,
      height: "30%",
      // marginLeft: 150,
      marginLeft: "15.5%",
      // marginTop: 400,
      marginTop: "40%"
    },
    
    appTitleFont: {
      // fontSize: 160,
      fontFamily: "CherryBomb",
      fontSize: 45,
      color: '#ffffff',
    },

    appSubTitle: {
      // width: 600,
      width: "60%",
      // height: 400,
      height: "10%",
      // marginLeft: 150,
      marginLeft: "15.5%",
      marginTop: "55%"
    },

    appSubTitleFont: {
      // fontSize: 70,
      fontSize: 20,
      color: '#ffffff',
    }
});

export default Coverpage;