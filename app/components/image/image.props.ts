import {FastImageProps, Source} from 'react-native-fast-image';
import {ImageStyle} from 'react-native';

export interface ImageProps extends Omit<FastImageProps, 'style'> {
  /**
   * if image fail load
   */
  placeholder?: Source | number;

  style?: ImageStyle;
}
