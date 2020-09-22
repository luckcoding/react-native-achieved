import React from 'react';
import {ViewProps} from '../view/view.props';
import {ScrollViewProps} from 'react-native';

export type ScrollingProps = ViewProps & {
  activeIndex: number;
  items: any[];
  renderItem: (item: any, active: boolean) => React.ReactNode;
  onChange?: (index: number) => void;
  horizontal?: boolean;
  spacing?: number;
  average?: boolean; // 等分
  scrollProps?: ScrollViewProps;
};
