import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../text/text';
import { useActionSheet } from './action-sheet.provider';

declare let module;

storiesOf('ActionSheet', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('default', () =>
    React.createElement(() => {
      const { show } = useActionSheet();
      return (
        <View>
          <TouchableOpacity
            onPress={() => show({ items: ['block', 'report'] })}
          >
            <Text h3>show action sheet</Text>
          </TouchableOpacity>
        </View>
      );
    }),
  )
  .add('with danger', () =>
    React.createElement(() => {
      const { show } = useActionSheet();
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              show({ items: ['add', 'delete'], destructiveIndex: 1 })
            }
          >
            <Text h3>show action sheet with danger</Text>
          </TouchableOpacity>
        </View>
      );
    }),
  );
