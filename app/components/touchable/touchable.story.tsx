import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen} from '../../../storybook/views';
import {View} from 'react-native';
import {Touchable} from './touchable';

declare let module;

storiesOf('Touchable', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <Touchable />
      </View>
    );
  });
