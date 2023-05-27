import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './chatStyle';
import {io} from 'socket.io-client';

const Chat = () => {
  const [message, setmessage] = useState('');
  const [data, setdata] = useState([]);
  const socket = io('http://localhost:8000');

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('client', 'Hi From Client side socket');
    });
  }, []);
  const handelMessageSent = () => {
    if (message) {
      socket.emit('send', message);
    }
  };
  useEffect(() => {
    socket.on('receive', data => {
      setdata(predata => [...predata, data]);
      console.log(data);
    });
  }, []);
  console.log(data);
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 10}}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={text => setmessage(text)}
        />
        <Button title="Send" onPress={handelMessageSent} />
      </View>
      <View style={{paddingHorizontal: 10, paddingTop: 10}}>
        {data.map((item, index) => {
          return <Text key={index}>{item}</Text>;
        })}
      </View>
    </View>
  );
};

export default Chat;
