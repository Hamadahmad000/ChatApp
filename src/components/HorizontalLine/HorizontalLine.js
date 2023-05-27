import {View, Text} from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import styles from './style';

const HorizontalLine = ({marginHorizontal}) => {
  const customStyle = {};
  if (marginHorizontal) customStyle.marginHorizontal = marginHorizontal;
  return <View style={[styles.lineContainer, customStyle]}></View>;
};

export default HorizontalLine;
