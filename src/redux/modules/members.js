export const Geako = 'Geako'
export const Choiza = 'Choiza'

export const GeakoBtn = "membersBtn/GEAKO"
export const ChoizaBtn = "membersBtn/CHOIZA"


const initialState = {
    member: 'Geako',
    option: '',
};

const members = (state = initialState, action) => {
    switch (action.type) {
        case GeakoBtn :
            return {member: Geako}
        case ChoizaBtn:
            return {member: Choiza}
        default:
            return state;
    }
}

export default members;