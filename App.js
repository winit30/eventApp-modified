import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/config/store';
import Main from './src/Main';
import Loader from './src/components/modals/Loader';

const persist = store();

const App = () => (
  <Provider store={persist.store}>
      <PersistGate loading={<Loader/>} persistor={persist.persistor}>
         <Main />
      </PersistGate>
  </Provider>
);

export default App;
