import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import iconPath from '../../constant/iconPath';
import AppImage from '../AppImage/AppImage';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppText from '../AppText/AppText';

const ChatHeader = () => {
  const route = useRoute();
  const {DATA} = route.params;
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <AppView
      paddingVertical={10}
      flexDirection={'row'}
      paddingHorizontal={25}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <AppView>
        <AppView flexDirection={'row'} alignItems={'center'}>
          <TouchableOpacity onPress={goBack}>
            <AppImage source={iconPath.icBack} />
          </TouchableOpacity>
          <AppView paddingLeft={10} flexDirection={'row'} alignItems={'center'}>
            <AppImage
              source={DATA.profilePicture}
              dynamicImage={true}
              borderRadius={50}
              padding={10}
              borderWidth={0.3}
              height={30}
              width={30}
            />
            <AppText paddingLeft={10} fontSize={'h4'}>
              {DATA.name}
            </AppText>
          </AppView>
        </AppView>
      </AppView>
      <AppView flexDirection={'row'} alignItems={'center'}>
        <TouchableOpacity>
          <AppImage source={iconPath.icVideo} height={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AppImage source={iconPath.icCalls} marginLeft={20} />
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

export default ChatHeader;
