import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Chat from './src/screens/chat/Chat';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {getItem} from './src/config/Axios';
import {saveUserData} from './src/store/slices/userSlice';

const App = () => {
  useEffect(() => {
    GetState();
  }, []);
  const GetState = async () => {
    const asyncData = await getItem('userData');
    if (asyncData) store.dispatch(saveUserData(asyncData));
  };
  return (
    // <SafeAreaView style={{flex: 1}}>
    <Provider store={store}>
      <Navigation />
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
