import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  expanRoot: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  mask: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
