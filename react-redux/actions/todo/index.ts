import { ADD_TODO, REMOVE_TODO } from "./action-types";

/**
 * payload - data needed to perform action
 * type - action type
 *
 * Here these functions are not brain of their operations, they
 * carry payload needed to do (action type)
 */

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function removeTodo(todoId) {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
}
