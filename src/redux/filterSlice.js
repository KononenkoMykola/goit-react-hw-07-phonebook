import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    findContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { findContact } = filterSlice.actions;