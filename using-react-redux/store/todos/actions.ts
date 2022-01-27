import { ITodo } from "../../lib/todos";
import { withMatcher } from "../utils";

export const SET_LOADING = "@todos/SET_LOADING";
export const CREATE_TODO = "@todos/CREATE_TODO";
export const UPDATE_TODO = "@todos/UPDATE_TODO";
export const DELETE_TODO = "@todos/DELETE_TODO";

export const setLoading = withMatcher((value: boolean) => {
  return {
    type: SET_LOADING,
    payload: value,
  };
});

export const createTodo = withMatcher((todo: ITodo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
});

export const updateTodo = withMatcher((newtodo: ITodo) => {
  return {
    type: UPDATE_TODO,
    payload: newtodo,
  };
});

export const deleteTodo = withMatcher((id: string) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
});
