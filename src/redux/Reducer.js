import { ADD_USER, REMOVE_USER } from "./Constands";

const initialState = {
    users: []
}


export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === ADD_USER) {
        let newUser = {}
        newUser.users = state.users.map(user => Object.assign({}, user));
        newUser.users.push({
            ...payload
        })
        
        return newUser;
    } else if (type === REMOVE_USER) {
        let newUser = {}
        newUser.users = state.users
            .map(user => Object.assign({}, user))
            .filter(elem => elem.id !== payload.id)
        
        return newUser;
    }else {
        return state;
    }
}