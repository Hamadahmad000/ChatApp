import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './style';

import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';
import AppText from '../../components/AppText/AppText';
import Header from '../../components/Header/Header';
import AppView from '../../components/AppView/AppView';
import iconPath from '../../constant/iconPath';
import {useNavigation} from '@react-navigation/native';
import AppImage from '../../components/AppImage/AppImage';
import {useRoute} from '@react-navigation/native';
import OtpInputs from 'react-native-otp-inputs';
import action from '../../store/action';
import {useSelector} from 'react-redux';

const OtpVerification = () => {
  const [disabled, setdisabled] = useState(false);
  const [useData, setuseData] = useState({
    data: {
      COUNTRYDATA: {
        dialCode: '+92',
        flag: 'https://cdn.kcak11.com/CountryFlags/countries/pk.svg',
        isoCode: 'PK',
        name: 'Pakistan',
      },
    },
  });
  // const data = useSelector(state => console.log(state));
  const navigation = useNavigation();

  const route = useRoute();
  const {params} = route;

  useEffect(() => {
    setuseData(params.DATA);
  }, [route]);

  // Handling Header Left View
  const leftHeaderView = () => {
    return (
      <AppView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AppImage source={iconPath.icBack} />
        </TouchableOpacity>
      </AppView>
    );
  };

  // Handling Screen Navigation
  const handleScreenNavigate = () => {
    // navigation.navigate('OtpVerification');
  };
  // Handling OTP Values and calling api
  const otpHandling = async value => {
    if (value.length >= 6) {
      const OTPVerificationData = {
        otp: value,
        userID: useData.data._id,
      };
      await action.otpVerification(OTPVerificationData);
    }
  };

  return (
    <WrapperContainer
      flex={1}
      barColor={THEME_COLORS.white}
      containerStyle={styles.container}>
      <Header
        centerText={useData.data.phone}
        rightDiabled={disabled}
        leftText={true}
        leftView={leftHeaderView}
        onRightPress={handleScreenNavigate}
      />
      <HorizontalLine />
      <AppText
        textAlign={'center'}
        paddingVertical={20}
        color={THEME_COLORS.gray}
        fontSize={'h5'}
        paddingHorizontal={20}>
        We have sent you a SMS with a code to the above number
      </AppText>
      <AppText
        textAlign={'center'}
        color={THEME_COLORS.gray}
        paddingVertical={20}
        fontSize={'h5'}
        paddingHorizontal={20}>
        To complete your phone number verification, please enter the 4-Digit
        activation code
      </AppText>
      <AppView paddingHorizontal={25}>
        <OtpInputs
          handleChange={otpHandling}
          numberOfInputs={6}
          placeholder="*"
          inputStyles={{
            borderBottomWidth: 1,
            height: 20,
            width: 40,
            fontSize: 18,
            textAlign: 'center',
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            marginVertical: 10,
            paddingVertical: 10,
          }}
          autoFocus={true}
        />
      </AppView>
      <AppText
        fontSize={18}
        color={THEME_COLORS.gray}
        textAlign={'center'}
        marginTop={50}>
        Resend code in :
      </AppText>
    </WrapperContainer>
  );
};

export default OtpVerification;

// Created By Hamad Mirza
