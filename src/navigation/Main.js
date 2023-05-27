import {View, Text} from 'react-native';
import React from 'react';
import * as Screen from '../screens/Index';
import BottomTab from './BottomTab';
const Main = Stack => {
  return (
    <>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </>
  );
};

export default Main;
