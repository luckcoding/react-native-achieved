import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { View } from 'react-native';
import { VirtualizedList } from './virtualized-list';

declare let module;

storiesOf('VirtualizedList', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <VirtualizedList />
      </View>
    );
  });
