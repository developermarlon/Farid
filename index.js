import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import * as ReactRedux from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { NavigationContainer } from '@react-navigation/native';
import rootSaga from 'library/networking/sagas';
import allReducers from 'library/redux/reducers';
import CounterContainer from 'library/redux/container/navigatorContainer';

import { name as appName } from './app.json';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer', 'formReducer'],
  debounce: 500,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

// Middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

export default function App() {
  return (
    <ReactRedux.Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor={'black'} />
        <NavigationContainer>
          <CounterContainer />
        </NavigationContainer>
      </PersistGate>
    </ReactRedux.Provider>
  );
}
AppRegistry.registerComponent(appName, () => App);
