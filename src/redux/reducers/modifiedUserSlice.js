import { createSlice } from '@reduxjs/toolkit';
import { putUser } from './asyncThunk';

const modifiedUserSlice = createSlice({
  name: 'modifiedUser',
  initialState: {
    information: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(putUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putUser.fulfilled, (state, action) => {
        state.loading = false;
        state.information = action.payload;
      })
      .addCase(putUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { } = modifiedUserSlice.actions;
export default modifiedUserSlice.reducer;
