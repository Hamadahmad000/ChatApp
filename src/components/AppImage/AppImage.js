import {Image} from 'react-native';
import React from 'react';

const AppImage = ({
  resizeMode,
  source,
  height,
  width,
  alignSelf,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  backgroundColor,
  borderRadius,
  borderWidth,
  padding,

  dynamicImage = false,
}) => {
  const customStyle = {};
  let IType = dynamicImage == true ? {uri: source} : source;
  if (marginTop) customStyle.marginTop = marginTop;
  if (marginBottom) customStyle.marginBottom = marginBottom;
  if (marginLeft) customStyle.marginLeft = marginLeft;
  if (marginRight) customStyle.marginRight = marginRight;
  if (height) customStyle.height = height;
  if (width) customStyle.width = width;
  if (alignSelf) customStyle.alignSelf = alignSelf;
  if (backgroundColor) customStyle.backgroundColor = backgroundColor;
  if (borderRadius) customStyle.borderRadius = borderRadius;
  if (borderWidth) customStyle.borderWidth = borderWidth;
  if (padding) customStyle.padding = padding;

  return <Image source={IType} style={customStyle} resizeMode={resizeMode} />;
};

export default AppImage;
