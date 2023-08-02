import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Ticket() {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 30,
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.6,
            justifyContent: 'space-evenly',
          }}>
          <FontAwesome name='thumbs-o-up' size={20} color="white" />
          <Text style={{color: 'white'}}>52 people are interested</Text>
        </View>
        <View style={styles.interested}>
          <Text style={{color:'tomato'}}>Interested?</Text>
        </View>
      </View>
      <View style={styles.ticket}>
        <View
          style={{justifyContent: 'center',flex:1}}>
          <Text style={{color: 'white',fontSize:13,fontWeight:'300'}}>From</Text>
          <Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}>20 000 FCFA</Text>
        </View>
          <View style={{justifyContent: 'center',alignItems:'center',backgroundColor:'tomato',height:40,borderRadius:7,flex:1}}>
            <Text style={{color:'white',fontWeight:'bold'}}>Buy Ticket</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333333',
    width: '100%',
    height: 130,
    borderRadius: 19,
  },
  ticket: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 19,
    flexDirection:'row',
    paddingHorizontal: 30,
    justifyContent:'space-between',
    alignItems:'center'
  },
  interested: {
    width: 80,
    flex:0.3,
    borderColor: 'tomato', 
    borderWidth: 1,
    padding:4,
    alignItems:'center',
    borderRadius:7
},
});
