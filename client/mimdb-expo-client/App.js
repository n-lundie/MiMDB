// IMPORTANT:
//  This is the root component!
//  Display functionality has been passed down mimdb.js
//  DO NOT MODIFY THIS COMPONENT UNLESS ABSOLUTELY NECCESSARY
import 'react-native-gesture-handler';
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
