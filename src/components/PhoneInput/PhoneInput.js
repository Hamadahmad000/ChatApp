import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import AppView from '../AppView/AppView';
import AppText from '../AppText/AppText';
import styles from './style';
import {THEME_COLORS} from '../../constant/Theme';

const PhoneInput = ({DefaultCode, setPhone, Phone}) => {
  return (
    <AppView
      paddingHorizontal={25}
      alignItems={'center'}
      flexDirection={'row'}
      style={{borderBottomWidth: 0.3, borderColor: THEME_COLORS.gray}}
      paddingVertical={10}>
      <AppText fontSize={'h3'}>{DefaultCode}</AppText>
      <TextInput
        style={styles.inputStyle}
        placeholder="**********"
        keyboardType="number-pad"
        onChangeText={text => setPhone(text)}
        value={Phone}
      />
    </AppView>
  );
};

export default PhoneInput;
