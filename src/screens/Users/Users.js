import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './style';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import {THEME_COLORS} from '../../constant/Theme';
import Header from '../../components/Header/Header';
import AppView from '../../components/AppView/AppView';
import AppText from '../../components/AppText/AppText';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';
import AppImage from '../../components/AppImage/AppImage';
import iconPath from '../../constant/iconPath';
import {useNavigation} from '@react-navigation/native';
import {getAllUser} from '../../store/action/action';
const Users = () => {
  const [data, setdata] = useState('');
  const navigation = useNavigation();
  const GoToBack = () => {
    navigation.goBack();
  };
  const fetchUser = async () => {
    try {
      const response = await getAllUser();
      if (response.data) {
        setdata(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const leftHeaderView = () => {
    return (
      <TouchableOpacity>
        {data.length > 0 ? <AppText fontSize={17}>Edit</AppText> : <AppView />}
      </TouchableOpacity>
    );
  };
  const onChat = useCallback(item => {
    navigation.navigate('Message', {DATA: item});
  });
  const renderAllChtas = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onChat(item)}>
          <AppView
            flexDirection={'row'}
            alignItems={'center'}
            paddingVertical={20}
            paddingHorizontal={25}>
            <AppImage
              source={item.profilePicture}
              dynamicImage={true}
              borderRadius={50}
              padding={10}
              borderWidth={0.3}
              height={30}
              width={30}
            />
            <AppText
              fontSize={'h5'}
              paddingLeft={15}
              color={THEME_COLORS.black}>
              {item.name}
            </AppText>
          </AppView>
        </TouchableOpacity>
      );
    },
    [data],
  );

  // Component for When recents Chats is emplty
  const emplyRecentChat = () => {
    return (
      <AppView paddingHorizontal={25} justifyContent={'center'}>
        <AppText>No Chats</AppText>
      </AppView>
    );
  };

  // List Header Component
  const ListHeaderComponenet = () => {
    return (
      <AppView
        flexDirection={'row'}
        alignItems={'center'}
        paddingVertical={20}
        paddingHorizontal={25}>
        <AppImage
          source={iconPath.icGroup}
          borderRadius={50}
          padding={10}
          borderWidth={0.3}
          height={30}
          width={30}
        />
        <AppText fontSize={'h5'} paddingLeft={15} color={THEME_COLORS.navyBlue}>
          New Group
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
        centerText={'New Chat'}
        rightText={'Cancel'}
        rightDiabled={true}
        leftText={true}
        leftView={leftHeaderView}
        marginLeft={50}
        onRightPress={GoToBack}
      />
      <HorizontalLine />

      <FlatList
        data={data}
        renderItem={renderAllChtas}
        ListEmptyComponent={emplyRecentChat}
        ListHeaderComponent={ListHeaderComponenet}
      />
    </WrapperContainer>
  );
};

export default Users;

// Created By Hamad Mirza
