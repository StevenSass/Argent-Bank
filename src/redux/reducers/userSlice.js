import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './asyncThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    information: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.information = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;
