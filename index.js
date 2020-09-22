import App from './app/app.tsx';
import {AppRegistry} from 'react-native';
import {name as APP_NAME} from './app.json';

// Should we show storybook instead of our app?
const SHOW_STORYBOOK = false;

let RootComponent = App;
if (__DEV__ && SHOW_STORYBOOK) {
  const {StorybookUIRoot} = require('./storybook');
  RootComponent = StorybookUIRoot;
}

AppRegistry.registerComponent(APP_NAME, () => RootComponent);
