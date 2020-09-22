import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../storybook/views';
import {Text} from './text';
import {ColorsKeys} from '../../theme';
import {StyleSheet} from 'react-native';

declare let module;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

storiesOf('Text', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Colors', () => (
    <Story>
      <UseCase text="plain">
        {ColorsKeys.map((colorKey) => {
          const props = {[colorKey]: true};
          return (
            <Text key={colorKey} {...props} style={styles.item}>
              {colorKey}
            </Text>
          );
        })}
      </UseCase>
      <UseCase text="with bgColor">
        {ColorsKeys.map((colorKey: any) => (
          <Text key={colorKey} bgColor={colorKey} style={styles.item}>
            bg - {colorKey}
          </Text>
        ))}
      </UseCase>
    </Story>
  ))
  .add('Typography', () => (
    <Story>
      <UseCase text="title">
        <Text h1>h1</Text>
        <Text h2>h2</Text>
        <Text h3>h3</Text>
        <Text h4>h4</Text>
        <Text h5>h5</Text>
        <Text h6>h6</Text>
        <Text h7>h7</Text>
      </UseCase>
      <UseCase text="text">
        <Text regular>regular</Text>
        <Text small>small</Text>
        <Text tiny>tiny</Text>
        <Text xs>xs</Text>
      </UseCase>
    </Story>
  ));
