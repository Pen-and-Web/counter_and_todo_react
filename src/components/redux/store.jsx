import { createStore } from "redux";
import counterReducer from "./reducer";

export const initialState = {
  counter: 0,
  todos: []
};

const store = createStore(counterReducer, initialState);

export default store;
