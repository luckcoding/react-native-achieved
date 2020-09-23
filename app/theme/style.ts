import { useColorTheme } from './color-theme';
import { Colors } from './color';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Styles = { [key: string]: ViewStyle | TextStyle | ImageStyle };

// export function createStyled<P, S extends Styles>(
//   dynamic: (props: P, colors: Colors) => S
// ): (props?: P) => S {
//   return props => {
//     const { colors } = useColorTheme()
//     return dynamic(props, colors as any)
//   }
// }

export const createStyled = <P, S extends Styles>(
  dynamic: (props: P, colors: Colors) => S,
): ((props: P) => S) => {
  return (props) => dynamic(props, useColorTheme().colors);
};
