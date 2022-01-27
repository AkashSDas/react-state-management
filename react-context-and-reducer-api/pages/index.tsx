import { useReducer } from "react";
import TodoForm from "../components/todo-form";
import Todos from "../components/todos";
import todoReducer from "../context/reducer";
import TodoContext from "../context/todo-context";

function Index() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoForm />
      <Todos />
    </TodoContext.Provider>
  );
}

export default Index;
