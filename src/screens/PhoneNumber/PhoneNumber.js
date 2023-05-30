import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import AppText from '../../components/AppText/AppText';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './style';
import Header from '../../components/Header/Header';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';
import CountryPicker from '../../components/CountryPicker/CountryPicker';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import AppView from '../../components/AppView/AppView';
import AppImage from '../../components/AppImage/AppImage';
import iconPath from '../../constant/iconPath';
import {useNavigation} from '@react-navigation/native';
const PhoneNumber = () => {
  const [DefaultCode, setDefaultCode] = useState('+92');
  const [disabled, setdisabled] = useState(false);
  const [Phone, setPhone] = useState('');

  const [defaultCountry, setdefaultCountry] = useState({
    dialCode: '+92',
    flag: 'https://cdn.kcak11.com/CountryFlags/countries/pk.svg',
    isoCode: 'PK',
    name: 'Pakistan',
  });

  const navigation = useNavigation();
  const leftHeaderView = () => {
    return (
      <AppView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AppImage source={iconPath.icBack} />
        </TouchableOpacity>
      </AppView>
    );
  };
  const handleScreenNavigate = () => {
    navigation.navigate('EditProfile', {
      DATA: {
        NUMBER: Phone,
        COUNTRYDATA: defaultCountry,
      },
    });
  };

  return (
    <WrapperContainer
      flex={1}
      barColor={THEME_COLORS.white}
      containerStyle={styles.container}>
      <Header
        centerText={'Your Phone Number'}
        rightText={'Done'}
        rightDiabled={Phone.length > 9 ? true : false}
        leftText={true}
        leftView={leftHeaderView}
        marginLeft={10}
        onRightPress={handleScreenNavigate}
      />
      <HorizontalLine />
      <AppText
        textAlign={'center'}
        paddingVertical={20}
        fontSize={'h5'}
        paddingHorizontal={20}>
        Please confirm your country code and enter phone number
      </AppText>

      <CountryPicker
        setDefaultCode={setDefaultCode}
        defaultCountry={defaultCountry}
        setdefaultCountry={setdefaultCountry}
      />
      <PhoneInput DefaultCode={DefaultCode} Phone={Phone} setPhone={setPhone} />
    </WrapperContainer>
  );
};

export default PhoneNumber;

// Created By Hamad Mirza
