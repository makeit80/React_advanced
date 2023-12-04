import { createSlice } from '@reduxjs/toolkit';
// accessToken, avater, nickname, success, userId
const initialState = {
    value: {
        accessToken: "",
        avater: "",
        nickname: "",
        success: "",
        userId: "",
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
        editUserImg: (state, action) => {
            return {value: {...state.value, avater: action.payload}}
        },
    } 
});

export default userData.reducer;
export const {insertUserData, editUserName, editUserImg} = userData.actions;

