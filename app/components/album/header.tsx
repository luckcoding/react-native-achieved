import React, { memo, useRef } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { DropdownHandles } from '../dropdown/dropdown.props';
import { Dropdown } from '../dropdown/dropdown';
import { SELECT_MENU_HEIGHT, styles } from './album.styles';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../text/text';
import { View } from '../view/view';
import { TouchableOpacity } from 'react-native';

type HeaderProps = {
  albums?: CameraRoll.Album[];
  onCancel: () => void;
  onOk: () => void;
};

export const Header: React.FC<HeaderProps> = memo((props) => {
  const { albums = [], onCancel, onOk } = props;
  const dropdownRef = useRef<DropdownHandles>();
  return (
    <Dropdown
      ref={dropdownRef}
      height={SELECT_MENU_HEIGHT * (albums.length + 1)}
      expandStyle={{
        backgroundColor: 'white',
      }}
      expand={
        <React.Fragment>
          {albums.map((album) => (
            <RectButton style={styles.selectMenu} key={album.title}>
              <Text>{album.title}</Text>
            </RectButton>
          ))}
        </React.Fragment>
      }
    >
      <View cardColor style={styles.header}>
        <TouchableOpacity style={styles.editBtn} onPress={onCancel}>
          <Text remarkColor>Cancel</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.selectBtn} onPress={() => dropdownRef.current.toggle()}>
          <Text h5>分类</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.editBtn} onPress={onOk}>
          <Text primaryColor>Done</Text>
        </TouchableOpacity>
      </View>
    </Dropdown>
  );
});
