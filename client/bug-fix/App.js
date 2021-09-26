import React from 'react';
import { StyleSheet } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// Apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// Comps
import { Login } from './login';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Login />
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
