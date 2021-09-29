'use strict';

import { configureStore } from '@reduxjs/toolkit';

// Import reducers from slices
import authReducer from './authSlice';
import loginReducer from './loginSlice';
import registerReducer from './registerSlice';
import homeReducer from './homeSlice';
import surveyReducer from './surveySlice';

export default configureStore({
  // Add slice reducers to store
  reducer: {
    auth: authReducer,
    login: loginReducer,
    register: registerReducer,
    home: homeReducer,
    survey: surveyReducer,
  },
});
