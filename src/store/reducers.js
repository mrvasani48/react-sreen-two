import { combineReducers } from "redux";
import { alertReducer } from "./slices/alert.slice";
// import { processReducer } from "./slices/process.slice";
// import { userReducer } from "./slices/user.slice";

const rootReducer = combineReducers({
    // user : userReducer,
    alert : alertReducer,
    // process : processReducer,
})

const RootState = typeof rootReducer;
export { RootState , rootReducer };