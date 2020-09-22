import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {useColorTheme} from '../../app/theme';

export interface StoryProps {
  children?: React.ReactNode;
}

export function Story(props: StoryProps) {
  const {colors} = useColorTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.pageColor}}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  );
}
