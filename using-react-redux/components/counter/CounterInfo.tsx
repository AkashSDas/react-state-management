import { connect } from "react-redux";
import { counterInitialState } from "../../store/counter/reducers";
import { RootState } from "../../store/store";

interface Props {
  count: typeof counterInitialState.value;
}

const CounterInfo = ({ count }: Props) => {
  return <h3>{count}</h3>;
};

const mapStateToProps = (state: RootState) => ({
  count: state.counter.value,
});

export default connect(mapStateToProps, null)(CounterInfo);
