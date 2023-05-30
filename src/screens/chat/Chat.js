import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './chatStyle';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import {THEME_COLORS} from '../../constant/Theme';
import Header from '../../components/Header/Header';
import AppView from '../../components/AppView/AppView';
import AppText from '../../components/AppText/AppText';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';
import AppImage from '../../components/AppImage/AppImage';
import iconPath from '../../constant/iconPath';
import {useNavigation} from '@react-navigation/native';
const Chat = () => {
  const [data, setdata] = useState('');
  const navigation = useNavigation();
  const ViewAllLog = () => {
    navigation.navigate('Users');
  };
  const leftHeaderView = () => {
    return (
      <TouchableOpacity>
        {data.length > 0 ? <AppText fontSize={17}>Edit</AppText> : <AppView />}
      </TouchableOpacity>
    );
  };
  const renderRecentChats = useCallback(() => {
    return (
      <AppView>
        <AppText>Hello</AppText>
      </AppView>
    );
  }, [data]);

  // Component for When recents Chats is emplty
  const emptyRecentChat = () => {
    return (
      <AppView paddingHorizontal={25}>
        <AppText alignItems={'center'} marginTop={'60%'} fontSize={'h3'}>
          Tap on <AppImage source={iconPath.icEdit} /> in the top right corner
          to start a new chat
        </AppText>
        <AppText marginTop={20}>
          You will chat with contact who will installed and signup chatbes on
          their phone
        </AppText>
      </AppView>
    );
  };
  return (
    <WrapperContainer
      flex={1}
      barColor={THEME_COLORS.white}
      containerStyle={styles.container}>
      <Header
        centerText={''}
        rightText={'Done'}
        rightDiabled={true}
        leftText={true}
        leftView={leftHeaderView}
        marginLeft={10}
        onRightPress={ViewAllLog}
        rightImage={iconPath.icEdit}
      />
      <HorizontalLine />

      <FlatList
        data={data}
        renderItem={renderRecentChats}
        ListEmptyComponent={emptyRecentChat}
      />
    </WrapperContainer>
  );
};

export default Chat;

// Created By Hamad Mirza
