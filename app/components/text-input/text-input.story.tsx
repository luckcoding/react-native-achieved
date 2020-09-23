import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { View } from 'react-native';
import { TextInput } from './text-input';

declare let module;

storiesOf('TextInput', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <TextInput />
      </View>
    );
  });
