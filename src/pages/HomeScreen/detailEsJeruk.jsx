import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';

const Detail = () => {
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
          }}>
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
        <Text
          style={{
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
        source={require('../../assets/images/esjeruk.png')}
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
          Es Jeruk
        </Text>
        <Text
          style={{
            fontWeight: 'semibold',
            color: 'darkred',
          }}>
          Rp. 10.000
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
      Es jeruk adalah minuman yang terbuat dari buah jeruk. menyehatkan tubuh. tentunya memiliki manfaat yang sangat baik bagi kesehatan. memiliki rasa yang lezat.
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
        <Text style={{
            marginTop: 10.5,
            marginLeft: 18
        }}>
            Max. 10 Pemesanan
        </Text>
      </View>
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
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
