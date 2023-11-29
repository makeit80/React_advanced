const INPUT_CONTNET_VALUE = 'contentInput'
const INPUT_CONTNET_RESET = 'contentReset'


const initialState = {
    value: '',
};

export const contentValue = (payload) => {
    return {
        type: INPUT_CONTNET_VALUE,
        payload: payload,
    }
}

export const contentReset = () => {
    return {
        type: INPUT_CONTNET_RESET,
    }
}

const contentInput = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CONTNET_VALUE:
            return {value: action.payload}
        case INPUT_CONTNET_RESET:
            return {value: ''}
        default:
            return state;
    }
}

export default contentInput;