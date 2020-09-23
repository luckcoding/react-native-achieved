import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { View } from 'react-native';
import { ScrollView } from './scroll-view';
import { Text } from '../text/text';

declare let module;

const genData = (len = 10) =>
  Array(10)
    .fill({})
    .map((i, index) => index);

storiesOf('ScrollView', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => {
    return (
      <View>
        <ScrollView>
          {genData(100).map((index) => (
            <Text key={index}>{index}</Text>
          ))}
        </ScrollView>
      </View>
    );
  });
