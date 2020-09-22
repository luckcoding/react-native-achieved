import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen} from '../../../storybook/views';
import {View} from 'react-native';
import {Countdown} from './countdown';

declare let module;

storiesOf('Countdown', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <Countdown text="text" nextText="nextText" duration={1000} />
      </View>
    );
  });
