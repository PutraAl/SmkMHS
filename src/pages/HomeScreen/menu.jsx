import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View>
      <View style={{height: 52, width: 444, backgroundColor: 'darkred', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 16, borderRadius: 50}}>
        <Image source={require('../../assets/images/logomhs.png')} style={{}} />
        <Image source={require('../../assets/images/frame.png')} style={{}} />
      </View>
      <Text style={{marginLeft: 20, marginTop: 23, fontWeight: 400, fontSize: 16}}>Welcome to</Text>
      <Text style={{fontSize: 36, fontWeight: 'bold', color: 'black', marginLeft: 20}}>Kantin MHS</Text>
      <Text style={{fontSize: 15, fontWeight: 400, color: 'black', marginTop: 26, marginLeft: 20}}>Menu Makanan</Text>
    <View style={{flexDirection: 'row', alignSelf: 'center', }}>
    <View style={style.Makanan}>
    <View style={{backgroundColor: 'red', height: 150, width: 200, marginHorizontal: 25,borderRadius: 15, marginTop: 7, marginLeft: 20 }}></View>
    <View style={{backgroundColor: 'black', height: 150, width: 200, borderRadius: 15, marginHorizontal: 15, marginTop: 7, marginRight: 20}}></View>
    </View>
    </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  makanan: {
    
  }


})