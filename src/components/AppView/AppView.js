import {View, Text} from 'react-native';
import React from 'react';

const AppView = ({
  children,
  height,
  width,
  alignSelf,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  padding,
  paddingRight,
  paddingLeft,
  paddingBottom,
  paddingTop,
  textAlign,
  style,
  flexDirection,
  paddingHorizontal,
  paddingVertical,
  justifyContent,
  alignItems,
  backgroundColor,
  flex,
}) => {
  const customStyle = {};
  if (marginTop) customStyle.marginTop = marginTop;
  if (marginBottom) customStyle.marginBottom = marginBottom;
  if (marginLeft) customStyle.marginLeft = marginLeft;
  if (marginRight) customStyle.marginRight = marginRight;
  if (height) customStyle.height = height;
  if (width) customStyle.width = width;
  if (alignSelf) customStyle.alignSelf = alignSelf;
  if (margin) customStyle.margin = margin;
  if (padding) customStyle.padding = padding;
  if (paddingRight) customStyle.paddingRight = paddingRight;
  if (paddingLeft) customStyle.paddingLeft = paddingLeft;
  if (paddingBottom) customStyle.paddingBottom = paddingBottom;
  if (paddingTop) customStyle.paddingTop = paddingTop;
  if (textAlign) customStyle.textAlign = textAlign;
  if (flexDirection) customStyle.flexDirection = flexDirection;
  if (paddingHorizontal) customStyle.paddingHorizontal = paddingHorizontal;
  if (paddingVertical) customStyle.paddingVertical = paddingVertical;
  if (justifyContent) customStyle.justifyContent = justifyContent;
  if (alignItems) customStyle.alignItems = alignItems;
  if (backgroundColor) customStyle.backgroundColor = backgroundColor;
  if (width) customStyle.width = width;
  if (flex) customStyle.flex = flex;
  return <View style={[customStyle, style]}>{children}</View>;
};

export default AppView;
