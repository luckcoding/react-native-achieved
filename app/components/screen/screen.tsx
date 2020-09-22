import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  ViewStyle,
  KeyboardAvoidingView,
} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {ScreenProps} from './screen.props';
import {View} from '../view/view';
import {isIOS} from '../../theme';
import {flattenStyle} from '../../utils/helpers';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const Screen: React.FC<ScreenProps> = (props) => {
  const {
    unsafe = false,
    children,
    style,
    keyboardAvoidingView,
    ...other
  } = props;

  const {top: safeTop} = useSafeArea();
  const extendStyle: ViewStyle = {};

  const handleSafeTop = () => {
    let nextSafeTop = safeTop;
    const styleOverride = flattenStyle<ViewStyle>(style);
    if (typeof styleOverride === 'object') {
      const {padding, paddingVertical, paddingTop} = styleOverride;
      if (typeof padding === 'number') {
        nextSafeTop += padding;
      } else if (typeof paddingVertical === 'number') {
        nextSafeTop += paddingVertical;
      } else if (typeof paddingTop === 'number') {
        nextSafeTop += paddingTop;
      }
    }
    extendStyle.paddingTop = nextSafeTop;
  };

  // set safe top, handle with default style padding
  !unsafe && handleSafeTop();

  const content = (
    <View style={[styles.root, extendStyle, style]} {...other}>
      <StatusBar barStyle={props.statusBar || 'dark-content'} />
      {children}
    </View>
  );

  if (keyboardAvoidingView) {
    const keyboardAvoidingViewProps =
      typeof keyboardAvoidingView === 'boolean' ? {} : keyboardAvoidingView;
    return (
      <KeyboardAvoidingView
        style={{height: '100%', flex: 1}}
        behavior={isIOS ? 'padding' : null}
        {...keyboardAvoidingViewProps}>
        {content}
      </KeyboardAvoidingView>
    );
  }

  return content;
};
