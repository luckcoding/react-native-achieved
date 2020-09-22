import {TextInputProperties} from 'react-native';

export interface TextInputProps extends TextInputProperties {
  label?: string | React.ReactNode;
  suffix?: React.ReactNode;
}
