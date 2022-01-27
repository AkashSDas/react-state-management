import { AnyAction } from "redux";

// https://phryneas.de/redux-typescript-no-discriminating-union
//
// Automating creation of type safe actions

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction>(
  actionCreator: AC,
  type: ReturnType<AC>["type"]
): Matchable<AC>;

export function withMatcher(
  actionCreator: Function & { type?: string },
  _type?: string
) {
  const type = _type ?? actionCreator.type ?? actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}
