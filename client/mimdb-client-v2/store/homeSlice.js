'use strict';

// Import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// Create slice
const homeSlice = createSlice({
  // Set name of slice
  name: 'home',

  // Set initial state of slice
  initialState: {
    recent: [],
    search: '',
  },

  // Create reducers to handle state changes
  reducers: {
    updateRecent: (state, action) => {
      state.recent = action.payload;
    },
    clearRecent: (state, action) => {
      state.recent = [];
    },
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state, action) => {
      state.seach = '';
    },
  },
});

// Export reducers as actions to use in components
export const { updateRecent, clearRecent, updateSearch, clearSearch } =
  homeSlice.actions;

// Export reducers to add to store.js
export default homeSlice.reducer;
