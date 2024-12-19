import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export enum Modal {
  Login = 'Login',
  Signup = 'Signup',
  Profile = 'Profile',
  LoginSuccess = 'Login Success',
  SignupSuccess = 'Signup Success',
}

const initialState = {
  openModal: null,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    closeModal: (state) => {
      state = initialState;

      return state;
    },
  },
});

export const { setOpenModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;

export const selectOpenModal = (state: RootState) => state.modals.openModal;
