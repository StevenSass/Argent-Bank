import { POST_LOGIN } from "../actions/login.action";

const initialState = {};

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case POST_LOGIN:
            return action.payload;
    default:
        return state;
    }
}

