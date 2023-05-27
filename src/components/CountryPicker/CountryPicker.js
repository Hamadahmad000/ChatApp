import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import AppText from '../AppText/AppText';
import AppImage from '../AppImage/AppImage';
import iconPath from '../../constant/iconPath';
import styles from './style';
import {THEME_COLORS} from '../../constant/Theme';
import CountryModal from '../CountryModal/CountryModal';

const CountryPicker = ({setDefaultCode, defaultCountry, setdefaultCountry}) => {
  const [showModal, setshowModal] = useState(false);

  const handleCountryPicking = data => {
    console.log(data);
    setdefaultCountry(data);
    setDefaultCode(data.dialCode);
    setshowModal(false);
  };
  return (
    <TouchableOpacity
      style={styles.pickerContainer}
      onPress={() => setshowModal(true)}>
      <AppText fontSize={'h5'} color={THEME_COLORS.navyBlue}>
        {defaultCountry.name}
      </AppText>
      <AppImage source={iconPath.icForward} height={20} width={20} />
      <CountryModal
        isVisible={showModal}
        setisVisibe={setshowModal}
        PickCountry={handleCountryPicking}
      />
    </TouchableOpacity>
  );
};

export default memo(CountryPicker);
