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
}) => {
  const customStyle = {};
  if (marginTop) customStyle.marginTop = marginTop;
  if (marginBottom) customStyle.marginBottom = marginBottom;
  if (marginLeft) customStyle.marginLeft = marginLeft;
  if (marginRight) customStyle.marginRight = marginRight;
  if (height) customStyle.height = height;
  if (width) customStyle.width = width;
  if (alignSelf) customStyle.alignSelf = alignSelf;
  return <Image source={source} style={customStyle} resizeMode={resizeMode} />;
};

export default AppImage;
