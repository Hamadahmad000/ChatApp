import {createSlice} from '@reduxjs/toolkit';

const userslice = createSlice({
  name: 'userslice',
  initialState: {
    userData: {},
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {saveUserData} = userslice.actions;
export default userslice.reducer;

// Created By Hamad Mirza
