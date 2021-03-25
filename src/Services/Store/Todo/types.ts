import { Todo } from "../../../Models";

export interface ITodoState {
  readonly Todos?: Todo[] | undefined;
  readonly Todo?: Todo | undefined;
  readonly IsLoading: boolean;
  readonly Errors: string[] | false;
}

export enum ETodoActions {
  GET_ALL_TODO = "@todo/GET_ALL",
  GET_ALL_TODO_SUCCESS = "@todo/GET_ALL_SUCCESS",
  GET_ONE_TODO = "@todo/GET_ONE",
  GET_ONE_TODO_SUCCESS = "@todo/GET_ONE_SUCCESS",
  DELETE_TODO = "@todo/DELETE",
  UPDATE_TODO = "@todo/UPDATE",
  CREATE_TODO = "@todo/CREATE",
  SET_ERROR = "@todo/ERROR",
  SET_SUCCESS = "@todo/SUCCESS",
}

export interface GetAllTodo {
  type: ETodoActions.GET_ALL_TODO;
  payload: undefined;
}

export interface GetAllTodoSuccess {
  type: ETodoActions.GET_ALL_TODO_SUCCESS;
  payload: Todo[];
}

export interface GetAllTodoSuccess {
  type: ETodoActions.GET_ALL_TODO_SUCCESS;
  payload: Todo[];
}

export interface GetOneTodo {
  type: ETodoActions.GET_ONE_TODO;
  payload: number;
}

export interface GetOneTodoSuccess {
  type: ETodoActions.GET_ONE_TODO_SUCCESS;
  payload: Todo;
}

export interface DeleteTodo {
  type: ETodoActions.DELETE_TODO;
  payload: number;
}

export interface UpdateTodo {
  type: ETodoActions.DELETE_TODO;
  payload: { id: number; model: Todo };
}

export interface CreateTodo {
  type: ETodoActions.DELETE_TODO;
  payload: { model: Todo };
}

export interface SetError {
  type: ETodoActions.SET_ERROR;
  payload: string[] | false;
}

export type TodoActions =
  | GetAllTodo
  | GetAllTodoSuccess
  | GetOneTodo
  | GetOneTodoSuccess
  | DeleteTodo
  | UpdateTodo
  | SetError
  | CreateTodo;
