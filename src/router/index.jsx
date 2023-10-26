import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/HomeScreen'
import Menu from '../pages/HomeScreen/menu'

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home Screen">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
  </Stack.Navigator>
  )
}
const Stack = createNativeStackNavigator();

export default Router

const styles = StyleSheet.create({})