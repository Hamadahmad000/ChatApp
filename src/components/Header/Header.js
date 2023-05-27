import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import AppText from '../AppText/AppText';
import {THEME_COLORS} from '../../constant/Theme';

const Header = ({
  centerText,
  rightText,
  leftView,
  leftText = false,
  onRightPress,
  rightDiabled,
  marginLeft,
  marginRight,
}) => {
  return (
    <AppView
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      paddingHorizontal={15}
      paddingVertical={8}>
      {leftText ? leftView() : <AppText></AppText>}
      <AppText
        fontSize={18}
        marginLeft={marginLeft || 0}
        marginRight={marginRight || 0}
        color={THEME_COLORS.black}>
        {centerText}
      </AppText>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onRightPress}
        disabled={!rightDiabled}>
        <AppText
          fontSize={15}
          color={rightDiabled ? THEME_COLORS.navyBlue : THEME_COLORS.gray}>
          {rightText}
        </AppText>
      </TouchableOpacity>
    </AppView>
  );
};

export default Header;
