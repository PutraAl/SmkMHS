import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Menu = ({navigation}) => {
  return (
    <ScrollView>  
      <View style={{height: 52, width: 334, backgroundColor: 'darkred', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 16, borderRadius: 50, marginVertical: 16}}>
        <Image styl source={require('../../assets/images/logomhs.png')} style={{alignSelf: 'center', marginLeft: 80}} />
        <TouchableOpacity>
        <Image source={require('../../assets/images/frame.png')} style={{}} />
        </TouchableOpacity>
      </View>
      <Text style={{marginLeft: 20, marginTop: 10, fontWeight: 400, fontSize: 16}}>Welcome to</Text>
      <Text style={{fontSize: 36, fontWeight: 'bold', color: 'black', marginLeft: 20}}>Kantin MHS</Text>
      <Text style={{fontSize: 15, fontWeight: 400, color: 'black', marginTop: 5, marginLeft: 20}}>Menu Makanan</Text>
   
    <View style={styles.Makanan}>
      <View>
      <Image source={require('../../assets/images/ayampenyet.jpg')} resizeMode='cover' style={styles.listmakanan}/>
      <Text style={styles.textmakanan}>Ayam Penyet</Text>
      <Text style={styles.textharga}>Rp. 20.000</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DetailAyamPenyet')}>
        <View style={styles.tombol}>
          <Text style={styles.textorder}>Order</Text>
        </View>
      </TouchableOpacity> 
      </View>
      <View>
      <Image source={require('../../assets/images/mie_ayam.png')} resizeMode='cover' style={styles.listmakanan}/>
      <Text style={styles.textmakanan}>Mie Ayam</Text>
      <Text style={styles.textharga}>Rp. 15.000</Text>
      <TouchableOpacity>
        <View style={styles.tombol}>
          <Text style={styles.textorder}>Order</Text>
        </View>
      </TouchableOpacity> 
      </View>
    </View>
    <Text style={{fontSize: 15, fontWeight: 400, color: 'black', marginTop: 56, marginLeft: 20}}>Menu Minuman</Text>

    <View style={styles.Makanan}>
      <View>
      <Image source={require('../../assets/images/teh.jpg')} resizeMode='cover' style={styles.listmakanan}/>
      <Text style={styles.textmakanan}>Teh Obenk</Text>
      <Text style={styles.textharga}>Rp. 8.000</Text>
      <TouchableOpacity>
        <View style={styles.tombol}>
          <Text style={styles.textorder}>Order</Text>
        </View>
      </TouchableOpacity> 
      </View>
      <View>
      <Image source={require('../../assets/images/esjeruk.png')} resizeMode='cover' style={styles.listmakanan}/>
      <Text style={styles.textmakanan}>Es Jeruk</Text>
      <Text style={styles.textharga}>Rp. 10.000</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DetailEsjeruk')}>
        <View style={styles.tombol}>
          <Text style={styles.textorder}>Order</Text>
        </View>
      </TouchableOpacity> 
      </View>
    </View>
    <Text style={{marginVertical: 25, textAlign: 'center', fontSize: 10, fontFamily: 'Montserrat', color: 'black' }}>MHS CORPORATE</Text>
    </ScrollView>
  )
}

export default Menu

const styles = StyleSheet.create({
  Makanan: {
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  listmakanan : {
    height: 114, width: 180, borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 9
  },

  textmakanan: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 7

  },
  
  textharga : {
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: 'darkred',

  },

  tombol: {
    width: 175,
    height: 24,
    borderRadius: 50,
    color: 'white',
    borderWidth: 2,
   marginLeft: 20,
    borderColor: 'darkred'
  },

  textorder : {
    fontWeight: 'bold',
    color: 'darkred',
    textAlign: 'center'
  }


})