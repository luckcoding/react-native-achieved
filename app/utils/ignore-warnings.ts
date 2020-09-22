import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'componentWillMount is deprecated',
  'componentWillReceiveProps is deprecated',
  'Require cycle:',
]);
