import * as React from 'react';
import {Image as RNImage} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../storybook/views';
import {Image} from './image';

declare let module;

storiesOf('Image', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('core', () => (
    <Story>
      <UseCase text="plain">
        <Image source={undefined} />
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://static.runoob.com/images/demo/demo3.jpg'}}
        />
        <RNImage
          style={{width: 100, height: 100}}
          source={{
            uri:
              'file:///storage/emulated/0/DCIM/Camera/IMG_20200805_231425.jpg',
          }}
        />
      </UseCase>
    </Story>
  ));
