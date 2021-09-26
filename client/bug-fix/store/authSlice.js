'use strict';

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isAuth: false,
  },

  reducers: {
    doAuth: (state) => {
      state.isAuth = true;
    },
    unAuth: (state) => {
      state.isAuth = false;
    },
  },
});

export const { doAuth, unAuth } = authSlice.actions;
export default authSlice.reducer;
