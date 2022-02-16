import { combineReducers, createStore } from "redux";

//sample
const red = () => 1;
const rootReducer = combineReducers({ r: red });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
