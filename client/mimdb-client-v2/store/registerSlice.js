'use strict';

// Import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// Create slice
const registerSlice = createSlice({
  // Set name of slice
  name: 'register',

  // Set initial state of slice
  initialState: {
    email: '',
    name: '',
    password: '',
    confirm: '',
    valid: true,
  },

  // Create reducers to handle state changes
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateConfirm: (state, action) => {
      state.confirm = action.payload;
    },
    valid: (state) => {
      state.valid = true;
    },
    invalid: (state) => {
      state.valid = false;
    },
  },
});

// Export reducers as actions to use in components
export const {
  updateEmail,
  updateName,
  updatePassword,
  updateConfirm,
  valid,
  invalid,
} = registerSlice.actions;

// Export reducers to add to store.js
export default registerSlice.reducer;
