import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
  } from "redux";
import thunk from "redux-thunk";
import { initState, reducer } from "./Reducer";
  
  const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, createComposer(applyMiddleware(thunk)));
  
  export { store };