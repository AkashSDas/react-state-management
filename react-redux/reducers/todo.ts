import { ADD_TODO, REMOVE_TODO } from "../actions/todo/action-types";

// The initial state could be stored in separate file but since
// it's simple one line so kept in this file
export const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // Logic to add todo
      // Here payload has new todo data which is added to the state
      // If there's a backend then in this part we would have made
      // post request to create new todo in the backend
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todoReducer;
