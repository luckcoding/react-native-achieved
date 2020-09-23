import { TextStyle } from 'react-native';

export const typography = {
  // title
  h1: { fontSize: 48, fontWeight: '500', lineHeight: 60 } as TextStyle,
  h2: { fontSize: 40, fontWeight: '500', lineHeight: 48 } as TextStyle,
  h3: { fontSize: 32, fontWeight: '500', lineHeight: 40 } as TextStyle,
  h4: { fontSize: 24, fontWeight: '500', lineHeight: 32 } as TextStyle,
  h5: { fontSize: 20, fontWeight: '500', lineHeight: 28 } as TextStyle,
  h6: { fontSize: 16, fontWeight: '500', lineHeight: 22 } as TextStyle,
  h7: { fontSize: 14, fontWeight: '500', lineHeight: 16 } as TextStyle,

  regular: { fontSize: 16, lineHeight: 24 } as TextStyle,
  small: { fontSize: 14, lineHeight: 22 } as TextStyle,
  tiny: { fontSize: 12, lineHeight: 18 } as TextStyle,
  xs: { fontSize: 10, lineHeight: 12 } as TextStyle,
};

export type Typography = typeof typography;
export type TypographyLiterals = keyof Typography;
export type TypographyModifiers = Modifier<TypographyLiterals>;

export const typographyKeys = Object.keys(typography);
export const defaultTypography: TypographyLiterals = 'regular';
