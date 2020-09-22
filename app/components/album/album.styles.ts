import {StyleSheet} from 'react-native';
import {spacing} from '../../theme';

export const SELECT_MENU_HEIGHT = 56;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    overflow: 'hidden',
  },
  editBtn: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    minWidth: 50,
  },
  selectBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectMenu: {
    height: SELECT_MENU_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    overflow: 'hidden',
  },
  footer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
