import { ColorsKeys, ColorsLiterals } from './color';
import { typographyKeys, TypographyLiterals, typography } from './typography';
import { TextStyle, ViewStyle } from 'react-native';
import { useColorTheme } from './color-theme';
import { TextProps } from '../components/text/text.props';
import { ViewProps } from '../components/view/view.props';

export function useViewStyle(props: ViewProps): ViewStyle {
  const { colors } = useColorTheme();
  const viewStyle: ViewStyle = {};

  let bgColorPropsKey: ColorsLiterals;

  // set color styles
  for (const key in props) {
    if (!props[key]) break;
    // pick prop
    if (ColorsKeys.includes(key)) {
      bgColorPropsKey = key as any;
    }
  }

  // set bg color
  const backgroundColor = colors[bgColorPropsKey];
  backgroundColor && (viewStyle.backgroundColor = backgroundColor);

  return viewStyle;
}

type TextStyleOptions = {
  color: ColorsLiterals;
  typography: TypographyLiterals;
};

export function useTextStyle(
  props: TextProps,
  options: TextStyleOptions,
): TextStyle {
  const { colors } = useColorTheme();
  const textStyle: TextStyle = {};

  let { color: colorKey, typography: typographyKey } = options;

  // set color styles
  for (const key in props) {
    if (props[key] === false) continue;
    // pick prop
    if (ColorsKeys.includes(key)) {
      colorKey = key as any;
    } else if (typographyKeys.includes(key)) {
      typographyKey = key as any;
    }
  }

  // set color
  textStyle.color = colors[colorKey];
  // set typography
  Object.assign(textStyle, typography[typographyKey]);
  // set bg color
  const backgroundColor = colors[props.bgColor];
  backgroundColor && (textStyle.backgroundColor = backgroundColor);

  return textStyle;
}
