import { combineReducers } from "redux";

import { authReducer } from "./authReducers";

export const rootReducers = combineReducers({
    authReducer,
})