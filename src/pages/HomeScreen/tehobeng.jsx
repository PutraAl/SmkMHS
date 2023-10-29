import { StyleSheet, View, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView, Text} from 'react-native'
import React, { useState } from 'react';


const Tehobeng = ({navigation}) => {
    const [inputText, setInputText] = useState('');

    handleSubmit = () => {
      if (inputText >0 && inputText <11) {
        // Lakukan aksi yang diinginkan jika kondisi terpenuhi
        navigation.navigate('Success');
      } else {
        // Tampilkan pesan kesalahan jika kondisi tidak terpenuhi
        navigation.navigate('Fail');
      }
    }
{
  return (
<ScrollView>
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            marginLeft: 16,
            marginTop: 16,
            height: 52,
            width: 70,
            backgroundColor: 'darkred',
            borderRadius: 20,
          }} onPress={() => navigation.navigate('Menu')} >
          <Image
            source={require('../../assets/images/frameback.png')}
            resizeMode="contain"
            style={{
              height: 50,
              width: 35,
              display: 'flex',
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
        <Text style={{
            marginTop: 30,
            marginLeft: 16,
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            fontSize: 18,
            color: 'black',
          }}>
          
          Kembali
        </Text>
      </View>
      <Image
        source={require('../../assets/images/teh.jpg')}
        style={{
          width: 283,
          height: 274,
          borderRadius: 25,
          marginTop: 38,
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          marginLeft: 73,
          marginTop: 12,
          fontSize: 16,
          flexDirection: 'row',
          gap: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}>
         Teh Obenk
        </Text>
        <Text
          style={{
            fontWeight: 'semibold',
            color: 'darkred',
          }}>
          Rp. 8.000
        </Text>
      </View>
      <Text style={{
            width: 283,
            height: 65,
            marginLeft: 73,
            marginTop: 19,
            color: '#FF0000',
            fontWeight: 300,
            fontSize: 12
      }}>
     Teh dengan perpaduan es batu yang segar menghilangkan haus dahaga
      </Text>
      <Text style={{
        marginTop: 39,
        marginLeft: 73,
        color:'black',
        fontWeight:'bold'
      }}>
        Masukkan Jumlah
      </Text>
      <View style={{
        marginTop: 9,
        height: 50,
        width: 282,
        borderColor:'black',
        borderWidth: 1,
        marginLeft : 73,
        borderRadius: 15,
      }}>
        <SafeAreaView>
        <TextInput placeholder='Max Pemesanan 10 Pcs!'  maxLength={2} keyboardType='numeric' textContentType='telephoneNumber' onChangeText={(text) => setInputText(text)}
       value={inputText}></TextInput>

        </SafeAreaView>
       
            
        
      </View>
      <TouchableOpacity onPress={handleSubmit}>
      <View style={{
        width: 322,
        height: 58,
        borderRadius: 15,
        backgroundColor:'darkred',
        alignSelf:'center',
        marginTop: 102,
        marginBottom : 29,
        justifyContent: 'center'
      }}>
       
        <Text style={{
            textAlign: 'center',
            color:'white'
        }}>
            Konfirmasi Pesanan
        </Text>
      
      </View>
      </TouchableOpacity>
    </ScrollView>
  )
}
}
export default Tehobeng

const styles = StyleSheet.create({})