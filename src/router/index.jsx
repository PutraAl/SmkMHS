import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/HomeScreen'
import Menu from '../pages/HomeScreen/menu'
import DetailEsjeruk from '../pages/HomeScreen/detailEsJeruk'
import DetailAyamPenyet from '../pages/HomeScreen/detailAyamPenyet'
import Mieayam from '../pages/HomeScreen/Mieayam'
import Tehobeng from '../pages/HomeScreen/tehobeng';
import Success from '../pages//HomeScreen/success'
import Fail from '../pages/HomeScreen/fail'

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home Screen">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
    <Stack.Screen name="DetailEsjeruk" component={DetailEsjeruk} options={{headerShown: false}} />
    <Stack.Screen name="DetailAyamPenyet" component={DetailAyamPenyet} options={{headerShown: false}} />
    <Stack.Screen name="Mieayam" component={Mieayam} options={{headerShown: false}} />
    <Stack.Screen name="Tehobeng" component={Tehobeng} options={{headerShown: false}} />
    <Stack.Screen name="Success" component={Success} options={{headerShown: false}} />
    <Stack.Screen name="Fail" component={Fail} options={{headerShown: false}} />
  </Stack.Navigator>
  )
}
const Stack = createNativeStackNavigator();

export default Router

const styles = StyleSheet.create({})