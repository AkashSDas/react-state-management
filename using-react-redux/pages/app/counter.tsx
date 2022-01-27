import CounterInfo from "../../components/counter/CounterInfo";
import DecrementButton from "../../components/counter/DecrementButton";
import IncrementButton from "../../components/counter/IncrementButton";

export default function CounterPage() {
  return (
    <div>
      <CounterInfo />
      <IncrementButton />
      <DecrementButton />
    </div>
  );
}
