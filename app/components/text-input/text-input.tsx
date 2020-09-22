import React, {useMemo, memo} from 'react';
import {TextInputProps} from './text-input.props';
import {styled} from './text-input.styles';
import {TextInput as RNTextInput, TextStyle, StyleProp} from 'react-native';
import {View} from '../view/view';
import {Text} from '../text/text';
import {spacing} from '../../theme';

export const TextInput: React.FC<TextInputProps> = memo((props) => {
  const styles = styled(props);
  const {style = {}, label, suffix, ...other} = props;

  const textInputExtendStyle: StyleProp<TextStyle> = {};
  label && (textInputExtendStyle.marginLeft = spacing[4]);
  suffix && (textInputExtendStyle.marginRight = spacing[4]);

  return (
    <View style={styles.root}>
      {label && typeof label === 'string' ? <Text>{label}</Text> : label}
      <RNTextInput
        style={[styles.input, textInputExtendStyle, style]}
        {...other}
      />
      {suffix}
    </View>
  );
});
