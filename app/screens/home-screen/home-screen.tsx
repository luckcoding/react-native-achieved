import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../components';

export interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Screen>
      <Text>HomeScreen</Text>
    </Screen>
  );
};
