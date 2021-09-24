import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import { Mimdb } from './components/mimdb-main/mimdb';

export default function App() {
  return (
    // Wrap whole app in Provider to give access to store
    <Provider store={store}>
      <Mimdb />
    </Provider>
  );
}
