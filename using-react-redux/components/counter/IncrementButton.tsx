import { connect } from "react-redux";
import { Dispatch } from "redux";
import { increment } from "../../store/counter/actions";

interface Props {
  increment: typeof increment;
}

const IncrementButton = ({ increment }: Props) => {
  return <button onClick={() => increment(1)}>increment</button>;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (value: number) => dispatch(increment(value)),
});

export default connect(null, mapDispatchToProps)(IncrementButton);
