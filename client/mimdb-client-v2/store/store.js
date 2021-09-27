'use strict';

import { configureStore } from '@reduxjs/toolkit';

// Import reducers from slices
import authReducer from './authSlice';
import loginReducer from './loginSlice';

export default configureStore({
  // Add slice reducers to store
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});
