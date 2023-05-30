import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import AppView from '../AppView/AppView';
import AppText from '../AppText/AppText';
import {THEME_COLORS} from '../../constant/Theme';
import AppImage from '../AppImage/AppImage';
import iconPath from '../../constant/iconPath';

const Header = ({
  centerText,
  rightText,
  leftView,
  leftText = false,
  onRightPress,
  rightDiabled,
  marginLeft,
  marginRight,
  rightImage,
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
        {rightImage ? (
          <AppImage source={rightImage} />
        ) : (
          <AppText
            fontSize={15}
            color={rightDiabled ? THEME_COLORS.navyBlue : THEME_COLORS.gray}>
            {rightText}
          </AppText>
        )}
      </TouchableOpacity>
    </AppView>
  );
};

export default memo(Header);
