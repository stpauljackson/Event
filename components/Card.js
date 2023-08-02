import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Card() {
  return (
    <View
      style={{
        margin: 10,
        marginTop: 3,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        height: 180,
        justifyContent: 'space-evenly',
      }}>
      <Text
        style={{
          ...styles.text,
          backgroundColor: 'midnightblue',
          width: 80,
          padding: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        STAND UP
      </Text>
      <Text style={{...styles.text, fontSize: 25, fontWeight: 'bold'}}>
        BGMFK performing tonight
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Ionicons name="calendar-clear-outline" size={20} color="white" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 0.9,
          }}>
          <Text style={{...styles.text}}>
            Fri 26 Aug 2022 - Sun 25 Sep 2022
          </Text>
          <Text style={{...styles.text}}>|</Text>
          <Text style={{...styles.text}}>8:00PM</Text>
        </View>
      </View>
      <View style={{width: '85%',alignSelf:'flex-end',flexDirection: 'row'}}>
        <Text style={{color: 'orange'}}>+ ADD TO CALENDER</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Ionicons name="location-outline" size={20} color="white" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.9,
          }}>
          <Text style={{...styles.text}}>Restaurant Le Mississipi</Text>
          <Text style={{color: 'orange',marginLeft:20}}>GET DIRECTION</Text>
        </View>
      </View>
    </View>
  );
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
