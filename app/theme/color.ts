import { Theme } from '@react-navigation/native';

export const lightColors = {
  // core
  primaryColor: '#FF554B',
  complementaryColor: '#00BFBD',
  borderColor: '#D9D9D9',
  dividorColor: '#E9E9EB',
  warningColor: '#FFC319',
  errorColor: '#EA696F',
  infoColor: '#0071B9',
  successColor: '#98D45F',
  // text
  titleColor: '#333333',
  textColor: '#4D4D4D',
  remarkColor: '#8C8C8C',
  placeholderColor: '#BFBFBF',
  // bg
  pageColor: '#FAFAFC',
  cardColor: '#FFFFFF',
  contentColor: '#F7F7FA',
};

export const ColorsKeys = Object.keys(lightColors);

export type Colors = typeof lightColors;
export type ColorsLiterals = keyof Colors;
export type ColorsModifiers = Modifier<ColorsLiterals>;

export const darkColors: Colors = {
  // core
  primaryColor: '#BD4842',
  complementaryColor: '#25A3A2',
  borderColor: '#515659',
  dividorColor: '#333638',
  warningColor: '#FFC319',
  errorColor: '#EA696F',
  infoColor: '#0071B9',
  successColor: '#98D45F',
  // text
  titleColor: '#DADADA',
  textColor: '#A1A5AA',
  remarkColor: '#858A8C',
  placeholderColor: '#52575A',
  // bg
  pageColor: '#202123',
  cardColor: '#262B2E',
  contentColor: '#35393C',
};

export const NavigationLightTheme: Theme = {
  dark: false,
  colors: {
    primary: lightColors.primaryColor,
    background: lightColors.pageColor,
    card: lightColors.cardColor,
    text: lightColors.textColor,
    border: lightColors.borderColor,
    notification: lightColors.infoColor,
  },
};

export const NavigationDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: darkColors.primaryColor,
    background: darkColors.pageColor,
    card: darkColors.cardColor,
    text: darkColors.textColor,
    border: darkColors.borderColor,
    notification: darkColors.infoColor,
  },
};
