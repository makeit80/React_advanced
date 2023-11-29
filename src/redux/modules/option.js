export const GeakoOption = 'Geako'
export const ChoizaOption = 'Choiza'


const initialState = {
    option: '',
};

const option = (state = initialState, action) => {
    switch (action.type) {
        case GeakoOption:
            return {option: 'Geako'}
        case ChoizaOption:
            return {option: 'Choiza'}
        default:
            return state;
    }
}

export default option;