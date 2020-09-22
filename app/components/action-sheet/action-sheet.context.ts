import {createContext} from 'react';

export type IActionSheetOptions = {
  items: string[];
  onIndex?: (index: number) => void;
  destructiveIndex?: number;
};

export type IActionSheetContext = {
  show: (options: IActionSheetOptions) => void;
};

export const ActionSheetContext = createContext<IActionSheetContext>(
  {} as IActionSheetContext,
);
