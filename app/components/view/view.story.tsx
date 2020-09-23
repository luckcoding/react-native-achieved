import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story } from '../../../storybook/views';
import { View } from './view';
import { Text } from '../text/text';
import { ColorsKeys } from '../../theme';
import { StyleSheet } from 'react-native';

declare let module;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

storiesOf('View', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('BgColors', () => (
    <Story>
      {ColorsKeys.map((colorKey: any) => {
        const props = { [colorKey]: true };
        return (
          <View key={colorKey} {...props} style={styles.item}>
            <Text>bg - {colorKey}</Text>
          </View>
        );
      })}
    </Story>
  ));
