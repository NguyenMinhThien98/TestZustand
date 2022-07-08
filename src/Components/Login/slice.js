import {createSlice} from '@reduxjs/toolkit';

const initialSate = {
  loading: false,
  error: undefined,
  success: undefined,
  currentUser: undefined
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialSate,
  reducers: {
    reqestLogin(state) {
      state = {...initialSate, loading: true}
    },

    loginSuccess(state, action) {
      state = {...initialSate, error: false, success: true, currentUser: action.data}

      
    },

    loginFailure(state) {
      state = {...initialSate, error: true, success: false}
    },

    resetLoginData(state) {
      state = {...initialSate};
    },
  },
});

export const {reqestLogin, loginSuccess, loginFailure, resetLoginData} = loginSlice.actions
export default loginSlice.reducer;
