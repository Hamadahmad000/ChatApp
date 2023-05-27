import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import iconPath from '../../constant/iconPath';
import styles from './style';
import AppImage from '../../components/AppImage/AppImage';
import AppText from '../../components/AppText/AppText';
import AppView from '../../components/AppView/AppView';
import {THEME_COLORS} from '../../constant/Theme';
import {useNavigation} from '@react-navigation/native';
const TermsCondition = () => {
  const navigation = useNavigation();
  const handleScreenNavigate = () => {
    navigation.navigate('PhoneNumber');
  };
  return (
    <WrapperContainer containerStyle={styles.container} flex={1}>
      <AppImage
        source={iconPath.icLogo}
        alignSelf={'center'}
        height={150}
        width={150}
        marginTop={90}
      />
      <AppView marginTop={170}>
        <AppText
          fontSize={'h2'}
          alignSelf={'center'}
          fontFamily={'circularBold'}>
          Welcome To Chatbes
        </AppText>
        <AppText
          textAlign={'center'}
          paddingVertical={18}
          paddingHorizontal={15}
          fontSize={14}>
          Read our
          <AppText color={THEME_COLORS.skyBlue}> Privacy Policy.</AppText> Tap
          "Agree & Continue" to accept the
          <AppText color={THEME_COLORS.skyBlue}> Terms of Service.</AppText>
        </AppText>
        <AppText
          fontSize={'h3'}
          alignSelf={'center'}
          marginTop={50}
          color={THEME_COLORS.navyBlue}
          onPress={handleScreenNavigate}
          fontFamily={'circularRegular'}>
          Agree & Continue
        </AppText>
      </AppView>
    </WrapperContainer>
  );
};

export default TermsCondition;
