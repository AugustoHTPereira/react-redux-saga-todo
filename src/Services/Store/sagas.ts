import { all, takeLatest } from "redux-saga/effects";

import { ETodoActions } from "./Todo/types";
import { getTodo, getTodos } from "./Todo/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ETodoActions.GET_ALL_TODO, getTodos),
    takeLatest(ETodoActions.GET_ONE_TODO, getTodo),
  ]);
}
