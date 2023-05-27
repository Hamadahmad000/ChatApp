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
      NUMBER: '3125567359',
    },
    image:
      '/Users/hamad/Library/Developer/CoreSimulator/Devices/16CD0248-0C17-44AA-99E4-646DC814FDA2/data/Containers/Data/Application/5BEE1DC8-F461-48C0-B568-974679C75241/tmp/react-native-image-crop-picker/B33E0C54-8920-44A3-B524-13EA5F9B637C.jpg',
    name: 'Hamad',
  });
  const navigation = useNavigation();

  const route = useRoute();
  const {params} = route;
  console.log(useData);
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
  return (
    <WrapperContainer
      flex={1}
      barColor={THEME_COLORS.white}
      containerStyle={styles.container}>
      <Header
        centerText={`${useData.data.COUNTRYDATA.dialCode} ${useData.data.NUMBER}`}
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
          handleChange={code => console.log(code)}
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
