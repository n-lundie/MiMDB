'use strict';

import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',

  initialState: {
    email: '',
    password: '',
  },

  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { updateEmail, updatePassword } = loginSlice.actions;
export default loginSlice.reducer;
