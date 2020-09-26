import React, { useCallback } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript';
import { Screen, Text } from '../../components';
import { HomeParamList } from '../../navigation/types';

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<HomeParamList>;
}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props;
  const toDetail = useCallback(() => {
    navigation.navigate('ScrollView');
  }, [navigation]);
  return (
    <Screen>
      <RectButton onPress={toDetail}>
        <Text>ScrollView</Text>
      </RectButton>
    </Screen>
  );
};
