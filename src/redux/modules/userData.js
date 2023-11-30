import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        name: "",
        id: "",
        password: "",
    },
};

const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        insertUserData: (state, action) => {
            return {value: action.payload}
        },
        editUserName: (state, action) => {
            return {value: {...state.value, name: action.payload}}
        },
    } 
});

export default userData.reducer;
export const {insertUserData, editUserName} = userData.actions;

