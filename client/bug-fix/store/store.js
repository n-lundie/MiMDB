'use strict';

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import loginReducer from './loginSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});
