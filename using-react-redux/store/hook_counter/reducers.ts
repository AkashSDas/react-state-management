import { AnyAction } from "redux";
import {
  matchIncrementAction,
  matchSetDelayAction,
  matchSetLoadingAction,
} from "./actions";

export const hookCounterInitialState = {
  value: 0,
  delay: 10,
  loading: false,
};

function hookCounterReducer(
  state = hookCounterInitialState,
  action: AnyAction
) {
  if (matchIncrementAction(action))
    return { ...state, value: state.value + action.payload.value };
  if (matchSetDelayAction(action)) return { ...state, delay: action.payload };
  if (matchSetLoadingAction(action))
    return { ...state, loading: action.payload };
  return state;
}

export default hookCounterReducer;
