import {TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './style';
import AppView from '../../components/AppView/AppView';
import AppImage from '../../components/AppImage/AppImage';
import {useRoute} from '@react-navigation/native';
import iconPath from '../../constant/iconPath';
import {GiftedChat, InputToolbar, Bubble} from 'react-native-gifted-chat';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import {useSelector} from 'react-redux';
import io from 'socket.io-client';

const Message = () => {
  const route = useRoute();
  const {DATA} = route.params;
  const me = useSelector(state => state.Auth.userData);

  const userID = DATA._id;
  const senderID = me._id;

  const [messages, setMessages] = useState([]);
  const [messageIds, setMessageIds] = useState(new Set());

  const socket = io('http://localhost:8484');

  useEffect(() => {
    socket.on('receive', receivedMessages => {
      const updatedMessages = receivedMessages
        .filter(receivedMessage => !messageIds.has(receivedMessage._id))
        .map(receivedMessage => ({
          _id: receivedMessage._id,
          text: receivedMessage.text,
          createdAt: new Date(receivedMessage.createdAt),
          user: {
            _id: receivedMessage.user._id,
            name: receivedMessage.user.name,
            avatar: receivedMessage.user.avatar,
          },
        }));

      if (updatedMessages.length > 0) {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, updatedMessages),
        );
        updatedMessages.forEach(message => messageIds.add(message._id));
      }
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    if (messages.length === 0 || messages[0].sent) {
      return;
    }

    const updatedMessages = messages.map(message => ({
      ...message,
      sent: true,
      user: {
        _id: senderID === userID ? userID : senderID,
        name: senderID === userID ? 'You' : DATA.name,
        avatar: senderID === userID ? '' : DATA.profilePicture,
        recipientIdf: userID,
      },
    }));

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, updatedMessages),
    );
    updatedMessages.forEach(message => messageIds.add(message._id));

    socket.emit('send', updatedMessages);
  }, []);

  const renderBubble = props => {
    const {currentMessage} = props;
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor:
              currentMessage.user._id === senderID ? 'blue' : 'green',
          },
          left: {
            backgroundColor:
              currentMessage.user._id === senderID ? 'green' : 'blue',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const handleRenderAction = () => {
    return (
      <AppView alignItems={'center'} marginBottom={8} paddingLeft={10}>
        <TouchableOpacity activeOpacity={0.7}>
          <AppImage source={iconPath.icAdd} />
        </TouchableOpacity>
      </AppView>
    );
  };

  return (
    <WrapperContainer
      flex={1}
      barColor={THEME_COLORS.white}
      containerStyle={styles.container}>
      <ChatHeader />
      <ImageBackground source={iconPath.icBackground} style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: senderID,
          }}
          textInputStyle={{
            borderRadius: 30,
            marginHorizontal: 10,
            borderWidth: 0.3,
            backgroundColor: 'white',
          }}
          renderInputToolbar={props => (
            <InputToolbar
              {...props}
              containerStyle={{backgroundColor: '#eae3db', borderWidth: 0}}
            />
          )}
          renderActions={handleRenderAction}
          renderBubble={renderBubble}
          chat
        />
      </ImageBackground>
    </WrapperContainer>
  );
};

export default Message;
