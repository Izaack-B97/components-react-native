import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
// import { NavigationContainer, Theme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme : Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors
//   }
// }

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  )
}

const AppState = ( { children  } : any ) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;