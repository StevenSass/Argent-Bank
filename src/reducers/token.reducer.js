import { TOKEN_USER } from "../actions/token.action";

const initialState = {};

export default function tokenReducer(state = initialState, action) {
    switch(action.type) {
        case TOKEN_USER: 
            return action.payload;
    default:
        return state;
    }
}

