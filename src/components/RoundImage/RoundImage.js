import {TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import AppText from '../AppText/AppText';
import styles from './style';

const RoundImage = ({image, onPress}) => {
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
      {image ? (
        <Image
          source={{uri: image}}
          style={{height: 90, width: 90, borderRadius: 50}}
        />
      ) : (
        <AppText fontSize={'h5'}>Edit Profile</AppText>
      )}
    </TouchableOpacity>
  );
};

export default memo(RoundImage);
