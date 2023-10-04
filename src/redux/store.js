import { createStore,applyMiddleware,combineReducers } from "redux";
import fetchReducer from "./reducer/fetchReducer.js";
import wordReducer from "./reducer/wordRedcuer.js";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    data:fetchReducer,
    words:wordReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;