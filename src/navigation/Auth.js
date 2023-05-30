import {View, Text} from 'react-native';
import React from 'react';
import * as Screen from '../screens/Index';
const Auth = Stack => {
  return (
    <>
      <Stack.Screen name="TermsCondition" component={Screen.TermsCondition} />
      <Stack.Screen name="PhoneNumber" component={Screen.PhoneNumber} />
      <Stack.Screen name="EditProfile" component={Screen.EditProfile} />
      <Stack.Screen name="OtpVerification" component={Screen.OtpVerification} />
    </>
  );
};

export default Auth;

// Created By Hamad Mirza
