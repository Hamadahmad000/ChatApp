import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import Main from './Main';
import isLogin from '../helper/AuthHelper';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const LoggedIn = isLogin();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {LoggedIn ? Main(Stack) : Auth(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
