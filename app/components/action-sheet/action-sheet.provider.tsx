import React, { useState, useContext } from 'react';
import { ActionSheet } from './action-sheet';
import {
  ActionSheetContext,
  IActionSheetContext,
  IActionSheetOptions,
} from './action-sheet.context';

export const useActionSheet = () => useContext(ActionSheetContext);

export const ActionSheetProvider = ({ children }) => {
  const [options, setOptions] = useState<IActionSheetOptions>({
    items: [],
    onIndex: () => undefined,
    destructiveIndex: undefined,
  });
  const [visibile, setVisibile] = useState(false);

  const context: IActionSheetContext = {
    show: (options) => {
      setOptions(options);
      setVisibile(true);
    },
  };

  const handleOnIndex = (index?: number) => {
    if (typeof index === 'number') {
      typeof options.onIndex === 'function' && options.onIndex(index);
    }
  };

  return (
    <ActionSheetContext.Provider value={context}>
      {children}
      {visibile ? (
        <ActionSheet
          visibile={visibile}
          items={options.items}
          onIndex={handleOnIndex}
          onHide={() => setVisibile(false)}
          destructiveIndex={options.destructiveIndex}
        />
      ) : null}
    </ActionSheetContext.Provider>
  );
};
