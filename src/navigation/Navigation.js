import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import Main from './Main';
import isLogin from '../helper/AuthHelper';
import * as Screen from '../screens/Index';
import {useSelector} from 'react-redux';
import socket from 'socket.io-client';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const LoggedIn = isLogin();
  const me = useSelector(state => state.Auth.userData);
  useEffect(() => {
    const io = socket('http://localhost:8484');
    io.emit('userConnected', me);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {LoggedIn ? Main(Stack) : Auth(Stack)}
        <Stack.Screen name="Users" component={Screen.Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// Created By Hamad Mirza
