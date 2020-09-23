import React, { memo } from 'react';
import { RNCamera } from 'react-native-camera';
import { StyleSheet } from 'react-native';
import { ITEM_SIZE } from './setting';

const styles = StyleSheet.create({
  root: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
});

export const Taking: React.FC<any> = memo((props) => {
  return (
    <RNCamera
      style={styles.root}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.off}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    />
  );
});
