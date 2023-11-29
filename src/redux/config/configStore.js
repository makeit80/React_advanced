import {createStore} from "redux";
import { combineReducers } from "redux";
import members from "../modules/members";
import option from "../modules/option";
import nameInput from "../modules/nameInput";
import contentInput from "../modules/contentInput";
import dataProcess from "../modules/dataStorage";

const rootReducer = combineReducers({
    members,
    option,
    nameInput,
    contentInput,
    dataProcess,
});
const store = createStore(rootReducer);

export default store;


