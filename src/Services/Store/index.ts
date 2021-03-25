import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import createSagaMiddleware from "redux-saga";

import { IState } from "./types";
import { reducer as Todo } from "./Todo/reducers";
import rootSaga from "./sagas";

// Combine the store reducers
const rootReducer = combineReducers<IState>({
  todo: Todo,
});

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with saga
const store: Store<IState> = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

// Apply saga middleware
sagaMiddleware.run(rootSaga);

export default store;
