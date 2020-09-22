import React from 'react';
import {Text} from 'react-native';
import {Screen} from '../../components';

export interface CartScreenProps {}

export const CartScreen: React.FC<CartScreenProps> = () => {
  return (
    <Screen>
      <Text>CartScreen</Text>
    </Screen>
  );
};
