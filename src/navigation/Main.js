import {View, Text} from 'react-native';
import React from 'react';
import * as Screen from '../screens/Index';
import BottomTab from './BottomTab';
const Main = Stack => {
  return (
    <>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Message" component={Screen.Message} />
    </>
  );
};

export default Main;

// Created By Hamad Mirza
