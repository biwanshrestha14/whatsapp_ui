import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View style={styles.cont}>
        <View style={styles.navbar}>
            <Text style={styles.head}>
                Biwan
            </Text>
           <Image
           height={20} width={30}
           
           source={{uri:'https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png'}}/>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    navbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        color:'black',
        paddingHorizontal:20,
        paddingVertical:10
    },
    cont:{
        backgroundColor:'black',
        color:'white'
    },
    head:{
        color:'white',
        fontSize:24,
        fontWeight:'semibold'
    }
})