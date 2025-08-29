import { Dimensions, PixelRatio, useWindowDimensions } from 'react-native';
import { useState } from 'react';

// const width = Dimensions.get('window').width;
// const width = PixelRatio.getPixelSizeForLayoutSize(width);
//
// const height = Dimensions.get('window').height;
// const height = PixelRatio.getPixelSizeForLayoutSize(height);

export type DeviceSize = 'small' | 'medium' | 'large';
export type DeviceOrientation = 'portrait' | 'landscape';

export default function useDevice(){
  const { width, height } = useWindowDimensions();
  const getSize = (): DeviceSize => {
    if (width <= 540) return 'small'
    if (width <= 720) return 'medium'
    return 'large';
  }
  const getOrientation = (): DeviceOrientation => {
    if (width < height) return 'portrait';
    return 'landscape';
  }

  return {
    size: getSize(),
    orientation: getOrientation(),
  }

}



