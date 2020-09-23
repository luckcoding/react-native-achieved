import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story } from '../../../storybook/views';
import IconFont from '../icon';
import { StyleSheet } from 'react-native';
import { IconNames } from '../icon/names';
import { View } from '../view/view';
import { Text } from '../text/text';
import { onePixel, screenWidth } from '../../theme';

declare let module;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: onePixel,
    borderColor: '#f2f2f2',
    width: screenWidth / 4,
    height: 80,
  },
});

storiesOf('Icon', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Icons', () => (
    <Story>
      <View style={styles.root}>
        {IconNames.map((name: any) => (
          <View key={name} style={styles.item}>
            <IconFont name={name} />
            <Text xs>{name}</Text>
          </View>
        ))}
      </View>
    </Story>
  ));
