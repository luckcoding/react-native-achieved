import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { TouchableOpacity } from 'react-native';
import { Text } from '../text/text';
import { useAlbum } from './album.provider';

declare let module;

const Demo = () => {
  const { show } = useAlbum();
  const [selected, setSelected] = React.useState([]);
  return (
    <TouchableOpacity onPress={() => show({ selected, onSelect: setSelected })}>
      <Text h3>show action sheet</Text>
    </TouchableOpacity>
  );
};

storiesOf('Album', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('with select', () => <Demo />);
