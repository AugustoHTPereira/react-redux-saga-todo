import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { Todo } from "./Models";
import { IState } from "./Services/Store/types";
import * as TodoActions from "./Services/Store/Todo/actions";

type DispatchProps = {
  getTodos(): void;
  getTodo(id: number): void;
};

type Props = {
  todos: Todo[];
  isLoading: boolean;
  errors: string[] | false;
  todo?: Todo;
} & DispatchProps;

const Todos = ({
  todos,
  todo,
  isLoading,
  getTodos,
  errors,
  getTodo,
}: Props) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="App">
      <h1>REACT-REDUX-SAGA</h1>
      {isLoading ? "Loading..." : ""}

      <hr />

      {errors && (
        <div>
          <h2>Failure</h2>
          <ul style={{ color: "red" }}>
            {errors.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: "flex" }}>
        <ul>
          {todos.map((x) => (
            <li onClick={() => getTodo(x.id)} key={x.id}>
              {x.title}
            </li>
          ))}
        </ul>

        {todo && <pre>{JSON.stringify(todo, null, 2)}</pre>}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  todos: state.todo.Todos || [],
  isLoading: state.todo.IsLoading,
  errors: state.todo.Errors,
  todo: state.todo.Todo,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
