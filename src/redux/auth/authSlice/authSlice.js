import {
  registration,
  logIn,
  logOut,
  refreshUser,
} from '../authOperations/operations';
import { createSlice } from '@reduxjs/toolkit';

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// const pending = state => {
// };

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      // .addCase(registration.pending, pending)
      // .addCase(logIn.pending, pending)
      // .addCase(logOut.pending, pending)
      .addCase(registration.rejected, rejected)
      .addCase(logIn.rejected, rejected)
      .addCase(logOut.rejected, rejected)
      .addCase(registration.fulfilled, handleFulfilled)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});
export default authSlice.reducer;
