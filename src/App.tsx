import React from "react";
import { Provider as StoreProvider } from "react-redux";
import store from "./Services/Store";

import TodoList from "./TodoList";

const App = () => (
  <StoreProvider store={store}>
    <TodoList />
  </StoreProvider>
);

export default App;
