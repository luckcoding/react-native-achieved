import React from 'react';
import {Text} from 'react-native';
import {Screen} from '../../components';
import {theme} from '../../theme';

export interface CategoryScreenProps {
  size?: number;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = theme(
  (props, colors) => ({
    text: {
      color: colors.primaryColor,
      fontSize: props.size,
    },
  }),
  ({styles}) => {
    return (
      <Screen>
        <Text style={styles.text}>CategoryScreen</Text>
      </Screen>
    );
  },
);

CategoryScreen.defaultProps = {
  size: 30,
};
