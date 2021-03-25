import { call, put } from "redux-saga/effects";
import TodoApiService from "../../Api/Todo";
import { getTodoSuccess, setError, getOneTodoSuccess } from "./actions";
import { GetOneTodo } from "./types";

export function* getTodos() {
  try {
    yield put(getTodoSuccess(yield call(TodoApiService.getAsync)));
  } catch (error) {
    yield put(setError([error.message]));
  }
}

export function* getTodo(action: GetOneTodo) {
  try {
    yield put(getOneTodoSuccess(yield call(TodoApiService.getOneAsync, action.payload)));
  } catch (error) {
    yield put(setError([error.message]));
  }
}
