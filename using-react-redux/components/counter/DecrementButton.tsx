import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrement } from "../../store/counter/actions";

interface Props {
  decrement: typeof decrement;
}

const DecrementButton = ({ decrement }: Props) => {
  return <button onClick={() => decrement(1)}>increment</button>;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decrement: (value: number) => dispatch(decrement(value)),
});

export default connect(null, mapDispatchToProps)(DecrementButton);
