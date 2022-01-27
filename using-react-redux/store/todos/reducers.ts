import { AnyAction } from "redux";
import { createTodo, deleteTodo, setLoading, updateTodo } from "./actions";
import { ITodo } from "../../lib/todos";

interface TodosState {
  loading: boolean;
  todos: ITodo[];
}

export const todosInitialState: TodosState = {
  loading: false,
  todos: [],
};

function todosReducer(
  state = todosInitialState,
  action: AnyAction
): TodosState {
  if (setLoading.match(action)) {
    return { ...state, loading: action.payload };
  }
  if (createTodo.match(action)) {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (updateTodo.match(action)) {
    return {
      ...state,
      todos: state.todos.map((t) => {
        if (action.payload.id === t.id) return action.payload;
        return t;
      }),
    };
  }
  if (deleteTodo.match(action)) {
    return {
      ...state,
      todos: state.todos.filter((t) => t.id !== action.payload),
    };
  }

  return state;
}

export default todosReducer;
