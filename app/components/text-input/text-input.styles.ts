import { StyleSheet } from 'react-native';
import { onePixel, createStyled, spacing, typography } from '../../theme';

export const styled = createStyled((props, colors) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: onePixel,
    borderBottomColor: colors.borderColor,
    height: 44,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
}));
