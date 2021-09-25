'use strict';

import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',

  // Set initial state
  initialState: {
    email: '',
    password: '',
  },

  // Set reducers. These are converted to actions
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

// Export actions for use in components
export const { updateEmail, updatePassword } = loginSlice.actions;

// Export reducer for use in store.js
export default loginSlice.reducer;
