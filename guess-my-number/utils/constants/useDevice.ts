import { PixelRatio, useWindowDimensions } from 'react-native';

export type DeviceSize = 'small' | 'medium' | 'large';
export type DeviceOrientation = 'portrait' | 'landscape';

export default function useDevice(){
  const { width, height } = useWindowDimensions();
  const getSize = (): DeviceSize => {
    if (width <= 360) return 'small'
    if (width <= 400) return 'medium'
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



