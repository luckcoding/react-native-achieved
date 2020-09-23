import { StyleSheet } from 'react-native';
import { spacing, screenHeight } from '../../theme';

export const ActionSheetItemHeight = 56;
export const ActionSheetCancelSpacing = spacing[2];

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: screenHeight,
  },
  mask: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  item: {
    height: ActionSheetItemHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelItem: {
    marginTop: ActionSheetCancelSpacing,
  },
});
