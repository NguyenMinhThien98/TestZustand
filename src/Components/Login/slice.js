import {createSlice} from '@reduxjs/toolkit';

const initialSate = {
  loading: false,
  error: null,
  success: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialSate,
  reducers: {
    reqestLogin(state) {
      state.loading = true;
    },

    loginSuccess(state) {
      state.loading = false;
      state.error = false;
      state.success = true;
    },

    loginFailure(state) {
      state.loading = false;
      state.error = true;
      state.success = false;
    },

    resetLoginData(state) {
      state = initialSate;
    },
  },
});

export const {reqestLogin, loginSuccess, loginFailure, resetLoginData} = loginSlice.actions
export default loginSlice.reducer
