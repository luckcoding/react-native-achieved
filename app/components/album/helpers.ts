import { PermissionsAndroid } from 'react-native';
import { isAndroid } from '../../theme';
import { PhotoIdentifier } from '@react-native-community/cameraroll';

export const requestPermissions = async (): Promise<void> => {
  if (isAndroid) {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Access Request',
        message: 'Requests access to the album.',
        buttonPositive: 'OK',
      },
    );
    if (result !== 'granted') {
      throw new Error('Permission denied!');
    }
  }
};

export const filterEmpty = (edges: PhotoIdentifier[]): PhotoIdentifier[] => {
  return (edges || []).filter((item) => {
    return item.node.image.width > 0 && item.node.image.height > 0;
  });
};
