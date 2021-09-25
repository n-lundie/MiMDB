'use strict';

import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
  name: 'authentication',

  // Set initial state
  initialState: {
    isAuthenticated: false,
    token: '',
  },

  // Set reducers. These are converted to actions
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    deAuthenticate: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Export actions for use in components
export const { authenticate, deAuthenticate } = authenticationSlice.actions;

// Export reducer for use in store.js
export default authenticationSlice.reducer;
