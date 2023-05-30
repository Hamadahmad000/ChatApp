import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {memo} from 'react';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './style';

const WrapperContainer = ({
  children,
  barContent = 'dark-content',
  barColor = THEME_COLORS.white,
  containerStyle,
  flex,
}) => {
  const customContainerStyle = {};
  if (flex) customContainerStyle.flex = flex;
  return (
    <View
      style={[styles.WrapperContainer, containerStyle, customContainerStyle]}>
      <StatusBar backgroundColor={barColor} barStyle={barContent} />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

export default memo(WrapperContainer);
