import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice"
import userReducer from "./userSlice"
import modifiedUserReducer from "./modifiedUserSlice"


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    modifiedUser: modifiedUserReducer
});

export default rootReducer;
