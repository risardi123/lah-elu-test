import React from 'react';
import {Image, ImageProps, StyleProp, ImageStyle} from 'react-native';
import {defaultImage} from '../config.ts';

interface BaseImageProps extends ImageProps {
  uri?: string;
  style?: StyleProp<ImageStyle>;
}

export const BaseImage: React.FC<BaseImageProps> = ({uri, style, ...props}) => {
  return (
    <Image
      source={{uri: uri?.trim() !== '' ? uri : defaultImage}}
      style={style}
      {...props}
    />
  );
};
