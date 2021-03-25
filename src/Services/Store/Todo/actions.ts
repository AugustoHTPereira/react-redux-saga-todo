import { action } from "typesafe-actions";
import { Todo } from "../../../Models";
import { ETodoActions } from "./types";

export const getTodos = () => action(ETodoActions.GET_ALL_TODO);
export const getTodoSuccess = (todos: Todo[]) => action(ETodoActions.GET_ALL_TODO_SUCCESS, todos);

export const getTodo = (id: number) => action(ETodoActions.GET_ONE_TODO, id);
export const getOneTodoSuccess = (todo: Todo) => action(ETodoActions.GET_ONE_TODO_SUCCESS, todo);

export const setError = (errors: string[] | false) => action(ETodoActions.SET_ERROR, errors);