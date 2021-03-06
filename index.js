if (__DEV__) {
  import('./ReactOtronConfig').then(() => console.log('Reactotron Configured'));
}
import 'react-native-get-random-values';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
