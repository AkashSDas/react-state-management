import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import counterReducer from "./counter/reducers";
import hookCounterReducer from "./hook_counter/reducers";

export const rootReducer = combineReducers({
  counter: counterReducer,
  hookCounter: hookCounterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
