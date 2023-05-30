import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screen from '../screens/Index';
import iconPath from '../constant/iconPath';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="chat">
      <Tab.Screen
        name="Status"
        component={Screen.Status}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'gray'}}
                source={iconPath.icCamera}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Screen.Calls}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'gray'}}
                source={iconPath.icCalls}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Screen.Camera}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'gray'}}
                source={iconPath.icCamera}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="chat"
        component={Screen.Chat}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'gray'}}
                source={iconPath.icChat}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="settings"
        component={Screen.Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'gray'}}
                source={iconPath.icSetting}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

// Created By Hamad Mirza
