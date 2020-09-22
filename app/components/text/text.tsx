import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {TextProps} from './text.props';
import {translate} from '../../i18n';
import {useTextStyle} from '../../theme';

export function Text(props: TextProps) {
  const {code, codeOptions, text, upperCase, children, style, ...rest} = props;
  // theme
  const textStyle = useTextStyle(props, {
    color: 'titleColor',
    typography: 'regular',
  });

  // figure out which content to use
  const i18nText = code && translate(code, codeOptions);
  const content = (i18nText || text || children || '') as string;

  return (
    <ReactNativeText style={[textStyle, style]} {...rest}>
      {upperCase ? content.toUpperCase() : content}
    </ReactNativeText>
  );
}
