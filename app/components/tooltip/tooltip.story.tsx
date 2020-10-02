import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { Text, View } from 'react-native';
import { Tooltip } from './tooltip';
import { IPlace, IPosition, Place, Position } from './constants';

declare let module;

const Example = () => {
  const [position, setPosition] = React.useState<IPosition>('bottom');
  const [place, setPlace] = React.useState<IPlace>('center');
  const popover = (
    <View style={{ padding: 20 }}>
      <Text>popover</Text>
    </View>
  );
  return (
    <React.Fragment>
      <View style={{ flexDirection: 'row' }}>
        {Position.map((p) => (
          <Text
            key={p}
            onPress={() => setPosition(p)}
            style={{
              paddingHorizontal: 4,
              color: p === position ? 'red' : 'black',
            }}
          >
            {p}
          </Text>
        ))}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {Place.map((p) => (
          <Text
            key={p}
            onPress={() => setPlace(p)}
            style={{
              paddingHorizontal: 4,
              color: p === place ? 'red' : 'black',
            }}
          >
            {p}
          </Text>
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 200,
        }}
      >
        <Tooltip
          showType="press"
          popover={popover}
          position={position}
          place={place}
        >
          <View style={{ backgroundColor: '#f2f2f2', padding: 20 }}>
            <Text>position: {position || 'default'}</Text>
            <Text>place: {place || 'default'}</Text>
          </View>
        </Tooltip>
      </View>
    </React.Fragment>
  );
};

storiesOf('Tooltip', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Core', () => <Example />);
