import { StyleSheet,ScrollView, Text, View,Image } from 'react-native'
import React from 'react'

export default function Story() {
  return (
    <View>
    <ScrollView horizontal style={styles.stories}>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://static.vecteezy.com/system/resources/previews/007/522/957/non_2x/add-story-button-icon-social-media-stories-vector.jpg'}}/>
        <Text style={styles.addt}>Ad₫ Story</Text>
      </View>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/438255469_1608429519697927_353542910417774858_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEUQNP_i4bYUrCuRVyNhz5by1dowmw4nv3LV2jCbDie_cTam6z3MG-iqdByyLevlTnqTWt860pqoMHcOjaTpGid&_nc_ohc=mz7yZho2-kkQ7kNvgFJCDoV&_nc_ht=scontent.fktm8-1.fna&oh=00_AYCmSuhIgJzBgBskzgGiytIJCw3NAZsQXUVG4nQmKml13g&oe=66A66686'}}/>
        <Text style={styles.addt}>Bipisha</Text>
  
      </View>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        <Text style={styles.addt}>Passive</Text>
      </View>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://images.unsplash.com/photo-1495001258031-d1b407bc1776?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        <Text style={styles.addt}>Unavailable</Text>
      </View>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        <Text style={styles.addt}>Fantech</Text>
      </View>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://images.unsplash.com/photo-1468971050039-be99497410af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        <Text style={styles.addt}>Suchana</Text>
      </View>
      <View style={styles.addcont}>
        
        <Image style={styles.add} height={70} width={70}
        source={{uri:'https://media.istockphoto.com/id/1454856143/photo/man-hand-is-holding-playing-cards-on-the-table.jpg?s=2048x2048&w=is&k=20&c=-bk4f_npYB5tpRz-iwQXjeueKco9rZ9mh9WoT7GABVg='}}/>
        <Text style={styles.addt}>Kevin </Text>
      </View>
    </ScrollView>
    <View style={styles.chats}>
        <Text style={styles.text}>Chats</Text>
        <Image borderBottomLeftRadius={10} borderTopRightRadius={10} width={80} source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/038/998/827/small_2x/bundle-of-loading-animation-4k-transparent-video.jpg'}}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    add:{
        borderRadius: 50,
        
    },
    stories:{
        paddingHorizontal:5,
        backgroundColor:'black',
        flexDirection:'row',
        gap:4
    

    },
    addcont:{
//   backgroundColor:'red',
  width:80,
  margin:5

    },
    addt:{
        color:'white',
        textAlign:'center'
    },
    chats:{
        flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'black',
    paddingLeft:20,
    paddingVertical:10
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'semibold'
    }
})