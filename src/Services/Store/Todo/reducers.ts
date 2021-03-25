import { Reducer } from "redux";
import { ITodoState, TodoActions, ETodoActions } from "./types";

export const reducer: Reducer<ITodoState, TodoActions> = (
  state: ITodoState = { IsLoading: false, Errors: false },
  action: TodoActions
): ITodoState => {
  console.log(action.type, action.payload);

  switch (action.type) {
    case ETodoActions.GET_ALL_TODO: {
      return {
        IsLoading: true,
        Errors: false,
        Todos: undefined,
        Todo: undefined,
      };
    }

    case ETodoActions.GET_ALL_TODO_SUCCESS: {
      return {
        IsLoading: false,
        Errors: false,
        Todos: action.payload,
      };
    }

    case ETodoActions.GET_ONE_TODO: {
      return {
        ...state,
        IsLoading: true,
      };
    }

    case ETodoActions.GET_ONE_TODO_SUCCESS: {
      return {
        ...state,
        IsLoading: false,
        Todo: action.payload
      };
    }

    case ETodoActions.SET_ERROR: {
      return {
        ...state,
        IsLoading: false,
        Errors: action.payload,
        Todos: undefined,
        Todo: undefined,
      };
    }

    default:
      return state;
  }
};
