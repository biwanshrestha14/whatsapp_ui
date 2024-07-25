import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Cardlist from './components/Carslist'
export default function App() {
  return (
    <View>
      <Navbar/>
      <Story/>
      <Cardlist/>
    </View>
  )
}

const styles = StyleSheet.create({
 
})