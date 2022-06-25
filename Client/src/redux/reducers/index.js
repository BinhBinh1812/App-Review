import { combineReducers } from "redux";

import authReducer from "./authReducer";
import socketReducer from "./socketReducer";

const reducers = combineReducers({
	authReducer,
	socketReducer,
});

export default (state, action) => reducers(state, action);
