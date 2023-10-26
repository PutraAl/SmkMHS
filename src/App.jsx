import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


const App = () => {
  
  return (
    
    <NavigationContainer>
      <Router />
    </NavigationContainer>
   
    
   
  );
}


export default App;
const styles = StyleSheet.create({})

{/* <Text style={{marginTop: 91, marginLeft: 20}}>Welcome To</Text>
      <Text style={{marginLeft: 20, fontSize: 36}}>Kantin MHS</Text>
      <Text style={{marginTop: 26, marginLeft: 20}}>Menu Makanan</Text>
      <View style={{height: 114, width: 147, backgroundColor: "red"}}></View> */}
      // const DetailsScreen = () => {
      //   return (
      //     <View>
      //       <Text>Hello Worlds</Text>
      //     </View>
      //   );
      //   }