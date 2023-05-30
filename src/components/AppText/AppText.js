import {View, Text} from 'react-native';
import React from 'react';
import {APP_FONTFAMILY, APP_FONT_SIZE} from '../../constant/Theme';

const AppText = ({
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
  fontSize,
  fontWeight,
  color,
  style,
  fontFamily,
  paddingHorizontal,
  paddingVertical,
  onPress,
  alignItems,
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
  if (fontWeight) customStyle.fontWeight = fontWeight;
  if (paddingHorizontal) customStyle.paddingHorizontal = paddingHorizontal;
  if (paddingVertical) customStyle.paddingVertical = paddingVertical;
  if (color) customStyle.color = color;

  if (alignItems) customStyle.alignItems = alignItems;
  if (fontSize) {
    let size = '';
    if (typeof fontSize == 'string') {
      size = APP_FONT_SIZE[fontSize];
    } else {
      size = fontSize;
    }
    if (fontFamily) {
      customStyle.fontFamily = APP_FONTFAMILY[fontFamily];
    }
    customStyle.fontSize = size;
  }
  return (
    <Text
      onPress={onPress || onPress}
      style={[
        {
          ...style,
        },
        customStyle,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
