import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from '../../../storybook/views';
import { Dropdown } from './dropdown';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ScrollView,
  View as RNView,
} from 'react-native';
import { Text } from '../text/text';
import { View } from '../view/view';
import { DropdownHandles } from './dropdown.props';

declare let module;

const EXPAND_HEIGHT = 100;

const styles = StyleSheet.create({
  expand: {
    height: EXPAND_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc',
  },
});

const Expand: React.FC<TouchableOpacityProps> = (props) => (
  <TouchableOpacity style={styles.expand} {...props}>
    <Text>HIDE</Text>
  </TouchableOpacity>
);

storiesOf('Dropdown', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Outsite', () =>
    React.createElement(() => {
      const dropdownRef = React.useRef<DropdownHandles>();
      return (
        <Dropdown
          ref={dropdownRef}
          expanHeight={100}
          expan={<Expand onPress={() => dropdownRef.current.hide()} />}
        >
          <Text
            bgColor="pageColor"
            h1
            onPress={() => dropdownRef.current.toggle()}
          >
            Header - Toggle
          </Text>
        </Dropdown>
      );
    }),
  )
  .add('Insite', () =>
    React.createElement(() => {
      const fixedDropdownParentRef = React.useRef<any>();
      const fixedDropdownRef = React.useRef<DropdownHandles>();
      const inscrollDropdownParentRef = React.useRef<any>();
      const inscrollDropdownRef = React.useRef<DropdownHandles>();

      return (
        <View style={{ flex: 1 }}>
          <Text h1>Header</Text>
          <RNView collapsable={false} ref={fixedDropdownParentRef}>
            <Dropdown
              ref={fixedDropdownRef}
              parent={fixedDropdownParentRef}
              expan={<Expand onPress={() => fixedDropdownRef.current.hide()} />}
            >
              <Text h2 onPress={() => fixedDropdownRef.current.toggle()}>
                Fixed - Toggle
              </Text>
            </Dropdown>
            <ScrollView>
              <RNView ref={inscrollDropdownParentRef} collapsable={false}>
                {[...Array(10)].map((i, k) => (
                  <Text key={`before-${k}`}> ---- insite before {k} ----</Text>
                ))}
                <Dropdown
                  ref={inscrollDropdownRef}
                  parent={inscrollDropdownParentRef}
                  expan={
                    <Expand
                      onPress={() => inscrollDropdownRef.current.hide()}
                    />
                  }
                >
                  <Text h2 onPress={() => inscrollDropdownRef.current.toggle()}>
                    InScroll - Toggle
                  </Text>
                </Dropdown>
                {[...Array(100)].map((i, k) => (
                  <Text key={k}> ---- insite {k} ----</Text>
                ))}
              </RNView>
            </ScrollView>
          </RNView>
        </View>
      );
    }),
  );
