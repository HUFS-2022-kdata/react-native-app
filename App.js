/* eslint-disable */

import React, { cloneElement } from 'react';
import AudioRecord from './components/AudioRecord';
import Coverpage from './screen/Coverpage';
// import MainAudio from './screen/MainAudio';
import MainAudioRecord from './screen/MainAudioRecord';
import Resultpage from './screen/Resultpage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();

function App() {
  const [loaded] = Font.useFonts({
    CherryBomb: require('./assets/font/CherryBomb-Regular.ttf')
  })
  
  if(!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cover" screenOptions={{headerShown: false,
          cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
          },})}}>
        <Stack.Screen name="Audio" component={AudioRecord} />
        <Stack.Screen name="Cover" component={Coverpage} />
        <Stack.Screen name="MainAudioRecord" component={MainAudioRecord} />
        <Stack.Screen name="Result" component={Resultpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;