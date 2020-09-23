import React from 'react';
import { TemplateProps } from './template.props';
import { styles } from './template.styles';
import { View } from 'react-native';

export const Template: React.FC<TemplateProps> = (props) => {
  return <View style={styles.root} {...props}></View>;
};
