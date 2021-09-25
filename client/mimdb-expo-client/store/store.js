'use strict';
// Import configure store to create store
import { configureStore } from '@reduxjs/toolkit';

// Import reducers from all state slices
import authenticationReducer from './authenticationSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';

// Invoke configureStore with object. "reducer" property is an object where
// key:value refers to stateName:reducerFunctions
export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    login: loginReducer,
    register: registerReducer,
  },
});
