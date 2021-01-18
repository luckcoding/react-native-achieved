import React from 'react';
import { VirtualizedListProps } from './virtualized-list.props';
import { styles } from './virtualized-list.styles';
import { View } from 'react-native';

export const VirtualizedList: React.FC<VirtualizedListProps> = (props) => {
  return <View style={styles.root} {...props}></View>;
};
