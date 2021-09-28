// Import gesture handler
import 'react-native-gesture-handler';

// Invoke dotenv.config
// require('dotenv').config();

// REQUIRED IN ALL COMPONENTS
import React from 'react';

// Apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://10.10.22.188:4000/graphql',
  cache: new InMemoryCache(),
});

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// Import Main app component
import { Main } from './src/Main/Main';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ApolloProvider>
  );
}
