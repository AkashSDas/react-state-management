import {
  increment,
  setDelay,
  setLoading,
} from "../../store/hook_counter/actions";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function CounterInfo() {
  const counter = useAppSelector((state) => state.hookCounter);
  const dispatch = useAppDispatch();

  const incrementCounter = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(increment(1));
      dispatch(setLoading(false));
    }, counter.delay);
  };

  const updateDelay = (value: number) => {
    dispatch(setDelay(value));
  };

  return (
    <div>
      {counter.loading ? <h2>Loading...</h2> : <h2>{counter.value}</h2>}
      <button disabled={counter.loading} onClick={incrementCounter}>
        increment
      </button>
      <input
        disabled={counter.loading}
        type="number"
        placeholder="Enter delay"
        value={counter.delay}
        onChange={(e) => updateDelay(parseInt(e.target.value))}
      />
    </div>
  );
}
