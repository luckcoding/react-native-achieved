import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen} from '../../../storybook/views';
import {View} from 'react-native';
import {Sibling} from './sibling';

declare let module;

storiesOf('Sibling', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <Sibling />
      </View>
    );
  });
