import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
    return (
        
    <View style={{flex: 1}}>  
  <Text style={{marginTop:90, fontSize: 26, fontWeight: "bold", color: "black", textAlign: 'center' }}>Welcome to our Apps</Text>

  <Image style={{marginTop: 51, alignSelf: 'center', borderRadius: 25 }} source={require('../../assets/images/gambarmhs.png')} />
  <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{height: 60, width: 146, backgroundColor: 'red', alignSelf: 'center', borderRadius: 35, marginTop: 110}}>
    <Text style={{fontFamily: 'Montserrat', fontSize: 24, alignSelf: 'center', marginTop: 10, color: 'white'}}>Next</Text>
  
  </TouchableOpacity>
  </View>
    );
  }

export default Home
 
const styles = StyleSheet.create({})