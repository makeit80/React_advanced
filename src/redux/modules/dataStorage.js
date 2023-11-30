import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

const dataProcessSlice = createSlice({
    name: 'dataProcess',
    initialState,
    reducers: {
        initialData: (state, action) => {
            return {value: action.payload}
        },
        insertData: (state, action) => {
            return {value: [...state.value, action.payload]}
        },
        editData: (state, action) => {
            return {value: action.payload}
        },
    }
});

export default dataProcessSlice.reducer;
export const {initialData, insertData, editData} = dataProcessSlice.actions;

