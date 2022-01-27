import { AnyAction } from "redux";
import { matchDecrementAction, matchIncrementAction } from "./actions";

export const counterInitialState = { value: 0 };

function counterReducer(state = counterInitialState, action: AnyAction) {
  if (matchIncrementAction(action))
    return { ...state, value: state.value + action.payload };
  if (matchDecrementAction(action))
    return { ...state, value: state.value - action.payload };
  return state;
}

export default counterReducer;
