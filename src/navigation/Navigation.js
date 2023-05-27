import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import Main from './Main';
const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {false ? Main(Stack) : Auth(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
