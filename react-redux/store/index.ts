import { combineReducers, createStore } from "redux";
import todoReducer from "../reducers/todo";

const rootReducer = combineReducers({ todos: todoReducer });

// Creating store
const store = createStore(rootReducer);

export default store;
