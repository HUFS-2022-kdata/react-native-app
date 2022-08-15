import React, { cloneElement } from 'react';
// import AudioRecord from './components/AudioRecord';
import Coverpage from './screen/Coverpage';
import Main from './screen/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

Font.loadAsync({
  CherryBomb: require('./assets/font/CherryBomb-Regular.ttf'),
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cover" screenOptions={{headerShown: false,
          cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
          },
        })
      }}>
        <Stack.Screen name="Cover" component={Coverpage} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;