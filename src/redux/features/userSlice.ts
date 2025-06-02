import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserState } from '@/types/user';
import { userApi } from '@/services/api';

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

// Async thunk
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    return await userApi.fetchUser();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch user';
      });
  },
});

// Selectors
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectUserStatus = (state: { user: UserState }) => state.user.status;
export const selectUserError = (state: { user: UserState }) => state.user.error;

export default userSlice.reducer;
