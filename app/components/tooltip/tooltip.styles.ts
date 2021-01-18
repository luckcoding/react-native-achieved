import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {},
  popover: {
    opacity: 0,
    position: 'absolute',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#002875',
    shadowOpacity: 0.2,
    shadowRadius: 25,
    elevation: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
});
