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
    searchRes: [],
    current: {},
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
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setSearchRes: (state, action) => {
      state.searchRes = action.payload;
    },
    clearSearchRes: (state) => {
      state.searchRes = [];
    },
  },
});

// Export reducers as actions to use in components
export const {
  updateRecent,
  clearRecent,
  updateSearch,
  clearSearch,
  setCurrent,
  setSearchRes,
  clearSearchRes,
} = homeSlice.actions;

// Export reducers to add to store.js
export default homeSlice.reducer;
