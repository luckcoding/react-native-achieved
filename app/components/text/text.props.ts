import {TextProperties} from 'react-native';
import {
  TypographyModifiers,
  ColorsModifiers,
  ColorsLiterals,
} from '../../theme';

export type TextProps = ColorsModifiers &
  TypographyModifiers &
  TextProperties & {
    /**
     * Children components.
     */
    children?: React.ReactNode;

    /**
     * Text which is looked up via i18n.
     */
    code?: string;

    /**
     * Optional options to pass to i18n. Useful for interpolation
     * as well as explicitly setting locale or translation fallbacks.
     */
    codeOptions?: any;

    /**
     * The text to display if not using `tx` or nested components.
     */
    text?: string;

    /**
     * toUpperCase
     */
    upperCase?: boolean;

    /**
     * text bg color
     */
    bgColor?: ColorsLiterals;
  };
