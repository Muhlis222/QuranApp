import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Beranda from './component/Beranda'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Beranda'>
        <Stack.Screen name='Beranda' component={Beranda} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;