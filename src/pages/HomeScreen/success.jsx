import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Success = ({navigation}) => {
  return (
    <ScrollView>
        <Image style={styles.gambar} source={require('../../assets/images/gambarsuccess.png')}/>
        <Text style={styles.tulisan}>
            Pemesanan Berhasil  
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <View style={{
        width: 322,
        height: 58,
        borderRadius: 15,
        backgroundColor:'darkred',
        alignSelf:'center',
        marginTop: 150,
        marginBottom : 29,
        justifyContent: 'center'
      }}>
        <Text style={{
            textAlign: 'center',
            color:'white'
        }}>
            Order Kembali!
        </Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
    
  )
}

export default Success

const styles = StyleSheet.create({
    gambar: {
        height: 246,
        width: 246,
        alignSelf: 'center',
        marginTop: 108
    },

    tulisan: {
        color: 'black',
        fontWeight: 'regular',
        fontFamily: 'Montserrat',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20
    }
})