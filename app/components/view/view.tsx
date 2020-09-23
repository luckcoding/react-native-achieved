import * as React from 'react';
import { View as ReactNativeView } from 'react-native';
import { ViewProps } from './view.props';
import { useViewStyle } from '../../theme';

export const View: React.FC<ViewProps> = (props) => {
  const { children, style, ...rest } = props;

  // theme
  const viewStyle = useViewStyle(rest);

  return (
    <ReactNativeView style={[viewStyle, style]} {...rest}>
      {children}
    </ReactNativeView>
  );
};
