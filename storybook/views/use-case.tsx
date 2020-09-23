import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';

export interface UseCaseProps {
  /** The title. */
  text: string;
  /** The component use case. */
  children: React.ReactNode;
  /** A style override. Rarely used. */
  style?: ViewStyle;
}

export function UseCase(props: UseCaseProps) {
  return (
    <React.Fragment>
      <Text
        style={{
          backgroundColor: '#e2e2e2',
          fontSize: 24,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        {props.text}
      </Text>
      <View style={{ paddingVertical: 10 }}>{props.children}</View>
    </React.Fragment>
  );
}
