import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';

function Coverpage({navigation}) {

  useEffect(() => {
    let id = setTimeout(() => {
      navigation.navigate("Main")
    }, 2000);

    return () => {
      clearTimeout(id);
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appTitle}>mallang!</Text>
        <Text style={styles.appSubTitle}>구음장애인을 위한{"\n"}음성 인식 서비스</Text>
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
      width: 1080,
      backgroundColor: '#627BFF',
      borderBottomWidth: 250,
      borderBottomColor: '#ffffff',
      borderLeftWidth: 1080,
      borderLeftColor: 'transparent',
      borderStyle: 'solid'
    },
  
    appTitle: {
      fontFamily: "CherryBomb",
      color: '#ffffff',
      fontSize: 160,
      width: 750,
      height: 200,
      marginLeft: 150,
      marginTop: 400,
    },
  
    appSubTitle: {
      color: '#ffffff',
      fontSize: 70,
      width: 600,
      height: 400,
      marginLeft: 150,
    },
});

export default Coverpage;