import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userLogin: false,
};

const loginState = createSlice({
    name: 'loginState',
    initialState,
    reducers: {
        switchUserState: (state, action) => {
            return {userLogin: action.payload}
        },
    } 
});

export default loginState.reducer;
export const {switchUserState} = loginState.actions;

