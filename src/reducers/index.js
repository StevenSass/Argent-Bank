import { combineReducers } from "redux";
import loginReducer from "./login.reducer"
import tokenReducer from "./token.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    //reducers
    tokenReducer,
    loginReducer,
    userReducer,
})