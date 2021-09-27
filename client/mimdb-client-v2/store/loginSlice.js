'use strict';

// Import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// Create slice
const loginSlice = createSlice({
  // Set name of slice
  name: 'login',

  // Set initial state of slice
  initialState: {
    email: '',
    password: '',
  },

  // Create reducers to handle state changes
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

// Export reducers as actions to use in components
export const { updateEmail, updatePassword } = loginSlice.actions;

// Export reducers to add to store.js
export default loginSlice.reducer;
