import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  token?: string | null;
  refreshToken?: string | null;
}

const initialState: AuthState = {
  refreshToken: sessionStorage.getItem('refreshToken'),
  token: sessionStorage.getItem('authToken'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const token = action.payload.accessToken;
      const refreshToken = action.payload.refreshToken;

      sessionStorage.setItem('authToken', token);
      sessionStorage.setItem('refreshToken', refreshToken);

      state.token = token;
      state.refreshToken = action.payload.refreshToken;
    },

    logout: (state) => {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('refreshToken');

      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.auth.token;
