import { AnyAction } from "redux";

/// Increment Action

export interface IncrementAction extends AnyAction {
  type: "INCREMENT";
  payload: number;
}

export function matchIncrementAction(
  action: AnyAction
): action is IncrementAction {
  return action.type === "INCREMENT";
}

export function increment(value: number): IncrementAction {
  return {
    type: "INCREMENT",
    payload: value,
  };
}

/// Decrement Action

export interface DecrementAction extends AnyAction {
  type: "DECREMENT";
  payload: number;
}

export function matchDecrementAction(
  action: AnyAction
): action is DecrementAction {
  return action.type === "DECREMENT";
}

export function decrement(value: number): DecrementAction {
  return {
    type: "DECREMENT",
    payload: value,
  };
}
