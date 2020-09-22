import React, {useState, useContext, useRef} from 'react';
import {Album} from './album';
import {AlbumContext, IAlbumContext} from './album.context';
import {Modal} from 'react-native';
import {Screen} from '../screen/screen';

export const useAlbum = () => useContext(AlbumContext);

export const AlbumProvider = ({children}) => {
  const onSelectTargetRef = useRef<(selected: string[]) => void>();
  const [initialSelected, setInitialSelected] = useState<string[]>([]);
  const [visibile, setVisibile] = useState(false);

  const onHide = () => {
    setVisibile(false);
  };

  const handleOk = (selected: string[]) => {
    typeof onSelectTargetRef.current === 'function' &&
      onSelectTargetRef.current(selected);
    onHide();
  };

  const context: IAlbumContext = {
    show: (options) => {
      options.selected && setInitialSelected(options.selected);
      onSelectTargetRef.current = options.onSelect;
      setVisibile(true);
    },
  };

  return (
    <AlbumContext.Provider value={context}>
      {children}
      <Modal
        visible={visibile}
        onRequestClose={onHide}
        animationType="slide"
        presentationStyle="overFullScreen">
        <Screen>
          <Album
            onCancel={onHide}
            onOk={handleOk}
            initialSelected={initialSelected}
          />
        </Screen>
      </Modal>
    </AlbumContext.Provider>
  );
};
