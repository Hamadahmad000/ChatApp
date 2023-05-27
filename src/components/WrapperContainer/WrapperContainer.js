import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
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
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;
