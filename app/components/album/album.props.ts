import { AssetType, Include } from '@react-native-community/cameraroll';

export interface AlbumProps {
  initialSelected?: string[];
  onCancel: () => void;
  onOk: (selected: string[]) => void;
  assetType?: AssetType;
  include?: Include[];
}
