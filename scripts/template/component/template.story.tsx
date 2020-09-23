import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { View } from 'react-native';
import { Template } from './template';

declare let module;

storiesOf('Template', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <Template />
      </View>
    );
  });
