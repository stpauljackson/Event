import { View, Text, StyleSheet, StatusBar,Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import img from '../img2.jpg';

export default function Header() {
  return (
    <View style={{height: 250}}>
        <Image style={styles.img} source={img} />
        <View style={{marginTop:StatusBar.currentHeight+5,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15}}>
        <Ionicons name='chevron-back' size={20} color="white" />
        <Ionicons name='share-social-outline' size={20} color="white" />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    img: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    text: {
      color: 'white',
    },
  });
  