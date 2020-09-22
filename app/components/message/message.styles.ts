import {StyleSheet} from 'react-native';
import {spacing} from '../../theme';
import {shadow} from '../../theme/shadow';

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: spacing[4],
    right: spacing[4],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    flexDirection: 'row',
    alignItems: 'center',
    ...shadow.popup,
  },
  icon: {
    marginRight: spacing[4],
  },
  main: {
    flex: 1,
  },
});
