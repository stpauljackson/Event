import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ViewMoreText from 'react-native-view-more-text';

export default function Details() {
  return (
    <View style={{padding: 13}}>
      <ScrollView>
        <View style={{marginBottom:200}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17, marginTop:15}}>
          About event
        </Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={(onPress)=>(<Text style={{color:'white',fontWeight:'bold'}} onPress={onPress}>Read More</Text>)}
          renderViewLess={(onPress)=>(<Text style={{color:'white',fontWeight:'bold'}} onPress={onPress}>Read Less</Text>)}
          textStyle={{textAlign: 'left',marginTop:5}}
        >
        <Text style={{color: 'white', marginTop:7}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        </ViewMoreText>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17, marginTop:15}}>
          Why should you attend this event?
        </Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={(onPress)=>(<Text style={{color:'white',fontWeight:'bold'}} onPress={onPress}>Read More</Text>)}
          renderViewLess={(onPress)=>(<Text style={{color:'white',fontWeight:'bold'}} onPress={onPress}>Read Less</Text>)}
          textStyle={{textAlign: 'left',marginTop:5}}
        >
        <Text style={{color: 'white', marginTop:7}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        </ViewMoreText>
        </View>
      </ScrollView>
    </View>
  );
}
