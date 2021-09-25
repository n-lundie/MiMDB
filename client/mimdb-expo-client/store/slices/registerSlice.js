'use strict';

import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',

  // Set initial state
  initialState: {
    email: '',
    password: '',
    confirm: '',
  },

  // Set reducers. These are converted to actions
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirm = action.payload;
    },
  },
});

// Export actions for use in components
export const { setEmail, setPassword, setConfirm } = registerSlice.actions;

// Export reducer for use in store.js
export default registerSlice.reducer;
