import React, { ReactNode, RefObject } from 'react';
import { ViewStyle, StyleProp } from 'react-native';

export interface DropdownProps {
  duration?: number;
  onClose?: () => void;
  expan: React.ReactNode;
  expanHeight?: number;
  expanStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  parent?: RefObject<any>;
}

export interface DropdownHandles {
  show: () => void;
  hide: () => void;
  toggle: () => void;
}
