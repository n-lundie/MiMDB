'use strict';

// Import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// Create slice
const surveySlice = createSlice({
  // Set name of slice
  name: 'survey',

  // Set initial state of slice
  initialState: {
    q0: 0,
    q1: 0,
    q2: 0,
    q3: 0,
  },

  // Create reducers to handle state changes
  reducers: {
    setResponse: (state, action, num) => {
      state[`q${num}`] = action.payload;
    },
    clearAllResponses: (state) => {
      for (let q in state) {
        q = 0;
      }
    },
  },
});

// Export reducers as actions to use in components
export const { setResponse, clearAllResponses } = surveySlice.actions;

// Export reducers to add to store.js
export default surveySlice.reducer;
