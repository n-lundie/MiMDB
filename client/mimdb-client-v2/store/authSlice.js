'use strict';

// Import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// Create slice
const authSlice = createSlice({
  // Set name of slice
  name: 'auth',

  // Set initial state of slice
  initialState: {
    isAuth: false,
    token: '',
  },

  // Create reducers to handle state changes
  reducers: {
    doAuth: (state, action) => {
      state.isAuth = true;
      state.token = action.payload;
    },
    unAuth: (state) => {
      state.isAuth = false;
      state.token = '';
    },
  },
});

// Export reducers as actions to use in components
export const { doAuth, unAuth } = authSlice.actions;

// Export reducers to add to store.js
export default authSlice.reducer;
