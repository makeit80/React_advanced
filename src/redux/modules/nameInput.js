const INPUT_NAME_VALUE = 'nameInput'
const INPUT_NAME_RESET = 'nameReset'


const initialState = {
    value: '',
};

export const nameValue = (payload) => {
    return {
        type: INPUT_NAME_VALUE,
        payload: payload,
    }
}

export const nameReset = () => {
    return {
        type: INPUT_NAME_RESET,
    }
}

const nameInput = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_NAME_VALUE:
            return {value: action.payload}
        case INPUT_NAME_RESET:
            return {value: ''}
        default:
            return state;
    }
}

export default nameInput;