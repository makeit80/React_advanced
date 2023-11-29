import fakedata from '../../components/fakeData.json'

const INPUT_DATA = 'dataStorage/INPUT_DATA'
const EDIT_DATA = 'dataStorage/EDIT_DATA'

const initialState = {
    value: fakedata,
};

export const insertData = (payload) => {
    return {
        type: INPUT_DATA,
        payload: payload,
    }
}
export const editData = (payload) => {
    return {
        type: EDIT_DATA,
        payload: payload,
    }
}



const dataProcess = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_DATA:
            return {value: [...state.value, action.payload]}
        case EDIT_DATA:
            return {value: action.payload}
        default:
            return state;
    }
}

export default dataProcess;