import React from 'react';
import { TouchableProps } from './touchable.props';
import { TouchableOpacity } from 'react-native';
import { useViewStyle } from '../../theme';

export const Touchable: React.FC<TouchableProps> = (props) => {
  const { children, style, ...other } = props;
  const viewStyle = useViewStyle(props);
  return (
    <TouchableOpacity activeOpacity={0.5} style={[viewStyle, style]} {...other}>
      {children}
    </TouchableOpacity>
  );
};
