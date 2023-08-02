import { View, Text } from 'react-native'
import React from 'react'
import Details from './Details';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const CustomTabLabel = ({ label, focused }) => (
    <View style={{width:80,alignItems:'center'}}>
      <Text style={focused ? {color:'white',fontWeight:'bold'} : {color:'white'}}>{label}</Text>
    </View>
  );

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            swipeEnabled: true,
            tabBarItemStyle:{width:100},
            tabBarStyle: {
              backgroundColor: 'black',
            },
            tabBarLabelStyle: {
              color: 'white',
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'tomato',
              height: 4
            },
          }}
          sceneContainerStyle={{backgroundColor: 'black'}}>
          <Tab.Screen
            options={{
              tabBarLabel: ({focused}) => (
                <CustomTabLabel label="Overview" focused={focused} />
              ),
            }}
            name="Overview"
            component={Details}
          />
          <Tab.Screen
            options={{
              tabBarLabel: ({focused}) => (
                <CustomTabLabel label="Menu" focused={focused} />
              ),
            }}
            name="Menu"
            component={Details}
          />
          <Tab.Screen
            options={{
              tabBarLabel: ({focused}) => (
                <CustomTabLabel label="Attendees" focused={focused} />
              ),
            }}
            name="Attendees"
            component={Details}
          />
          <Tab.Screen
            options={{
              tabBarLabel: ({focused}) => (
                <CustomTabLabel label="Artist" focused={focused} />
              ),
            }}
            name="Artist"
            component={Details}
          />
          <Tab.Screen
            options={{
              tabBarLabel: ({focused}) => (
                <CustomTabLabel label="Review" focused={focused} />
              ),
            }}
            name="Review"
            component={Details}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}