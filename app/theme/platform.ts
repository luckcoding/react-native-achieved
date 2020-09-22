import {Platform, Dimensions, PixelRatio} from 'react-native';

export const {height: windowHeight, width: windowWidth} = Dimensions.get(
  'window',
);
export const {height: screenHeight, width: screenWidth} = Dimensions.get(
  'screen',
);
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const onePixel = 1 / PixelRatio.get();
