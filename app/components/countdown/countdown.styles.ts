import { createStyled, spacing } from '../../theme';

const HEIGHT = 28;

export const styled = createStyled((props, colors) => ({
  root: {
    backgroundColor: colors.contentColor,
    height: HEIGHT,
    paddingHorizontal: spacing[3],
    borderRadius: HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
