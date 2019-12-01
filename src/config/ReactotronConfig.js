import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect({ host: '192.168.11.191' });

  tron.clear();

  console.tron = tron;
}
