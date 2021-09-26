// IMPORTANT:
//  This is the root component!
//  Display functionality has been passed down mimdb.js
//  DO NOT MODIFY THIS COMPONENT UNLESS ABSOLUTELY NECCESSARY
import 'react-native-gesture-handler';
import React from 'react';

// Redux provider component, provides acces to state
import { Provider } from 'react-redux';
import store from './store/store';

// Apollo provider component, provideds acces to Apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.1.72:4000/graphql',
  cache: new InMemoryCache(),
});

// App component
import { Mimdb } from './components/mimdb-main/mimdb';

export default function App() {
  return (
    // Wrap whole app in Provider to give access to store
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Mimdb />
      </ApolloProvider>
    </Provider>
  );
}
