import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, Theme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const customTheme : Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors
  }
}

const App = () => {
  return (
    <NavigationContainer
      theme={ customTheme }
    >
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;