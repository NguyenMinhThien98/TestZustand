import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: undefined,
    success: undefined,
    error: undefined,
    currentUser: undefined,
    theme: 'light' || 'dark',
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setCurrentUser(state, action){
            state = {
                ...initialState,
                currentUser: action.data

            }
        },

        togleTheme(state) {
            state = {...initialState, theme: !state.theme }
        }
    }
})

export const {setCurrentUser} = appSlice.actions;
export default appSlice.reducer;
