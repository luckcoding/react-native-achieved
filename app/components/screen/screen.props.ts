import {
  StatusBarStyle,
  KeyboardAvoidingViewProps,
  ViewStyle,
} from 'react-native';
import { ViewProps } from '../view/view.props';

export interface ScreenProps extends ViewProps {
  /**
   * cover props
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: StatusBarStyle;

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * handle Keyboard input
   */
  keyboardAvoidingView?: KeyboardAvoidingViewProps | true;
}
