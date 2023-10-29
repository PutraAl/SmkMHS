import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Fail = ({navigation}) => {
  return (
    <ScrollView>
        <Image style={styles.gambar} source={require('../../assets/images/fail.png')}/>
        <Text style={styles.tulisan}>
           Pemesanan Gagal
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
            Kembali ke Menu
        </Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
    
  )
}

export default Fail

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