import { AnyAction } from "redux";

/// Loading action

export interface SetLoadingAction extends AnyAction {
  type: "SET_LOADING";
  payload: boolean;
}

export function matchSetLoadingAction(
  action: AnyAction
): action is SetLoadingAction {
  return action.type === "SET_LOADING";
}

export function setLoading(value: boolean): SetLoadingAction {
  return {
    type: "SET_LOADING",
    payload: value,
  };
}

/// Increment Action

export interface IncrementAction extends AnyAction {
  type: "hookCounter/increment";
  payload: {
    value: number;
  };
}

export function matchIncrementAction(
  action: AnyAction
): action is IncrementAction {
  return action.type === "hookCounter/increment";
}

export function increment(value: number): IncrementAction {
  return {
    type: "hookCounter/increment",
    payload: { value },
  };
}

/// Delay action

export interface SetDelayAction extends AnyAction {
  type: "SET_DELAY";
  payload: number;
}

export function matchSetDelayAction(
  action: AnyAction
): action is SetDelayAction {
  return action.type === "SET_DELAY";
}

export function setDelay(value: number): SetDelayAction {
  return {
    type: "SET_DELAY",
    payload: value,
  };
}
