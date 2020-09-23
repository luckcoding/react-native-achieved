import * as React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

export interface StoryScreenProps {
  children?: React.ReactNode;
}

const behavior = Platform.OS === 'ios' ? 'padding' : null;
export const StoryScreen = (props) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={behavior}
    keyboardVerticalOffset={50}
  >
    {props.children}
  </KeyboardAvoidingView>
);
