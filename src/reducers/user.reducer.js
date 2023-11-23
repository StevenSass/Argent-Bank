import { POST_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case POST_USER:
            return action.payload;
    default:
        return state;
    }
}

