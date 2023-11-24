import { createSlice } from '@reduxjs/toolkit';
import { login } from './asyncThunk';

const authSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
        state.token = null;
        state.user = null;
        state.loading= false;
        state.error = null;
        localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.token = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token =  action.payload?.body.token;
        localStorage.setItem("token", action.payload?.body.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
