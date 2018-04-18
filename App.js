import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/config/store';
import Main from './src/Main';

const persist = store();

const App = () => (
  <Provider store={persist.store}>
      <PersistGate loading={null} persistor={persist.persistor}>
         <Main />
      </PersistGate>
  </Provider>
);

export default App;
