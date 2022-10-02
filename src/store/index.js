import { combineReducers } from "redux";
import setToken  from "./token";

const allRreducers = combineReducers({
    token: setToken
})
export default allRreducers