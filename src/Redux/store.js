import {
  createStore,
  compose,
  applyMiddleware
} from "redux";
import {
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import todosReducer from "./reducers/todosReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  todos: todosReducer
});

export default process.env.NODE_ENV === "development" ?
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) :
  createStore(rootReducer, applyMiddleware(thunk));