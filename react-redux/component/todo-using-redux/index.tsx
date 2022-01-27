/**
 * Consider the following digram to vaguely understand how thing
 * things are done when using redux
 *
 *            ------------  Reducers
 *            |               |
 *            |               |
 *          Action         Central store --------  Triggers
 *            |                                       |
 *         Dispatch                                Subscriptions
 *            |                                       |
 * (start) Component  ------------------ Pass updated states as props (end)
 *
 * Steps to use redux are same (there may be variations on how it is done
 * but steps are same)
 *
 * ####################################
 * ###### 3 Priciples of Redux ########
 * ####################################
 *
 * 1. Single source of truth - there will be single place where we'll store the
 * entire data of our application (although as per need it can be multiple which is
 * against the rules of redux but works fine). This single place is used not matter
 * how big the application so getting data won't be difficult as there is only one place
 * to look for data
 *
 * 2. State is read only - This is to avoid any accidental mutation of the state. Some
 * path or rules are followed if you won't to update the state but you can't do it directl.
 * To change state you've to fire some Actions and through that ONLY you can mutate the state
 *
 * 3. Changes are made with pure functions - This is there to make sure there is less chance
 * that you mess up during your interaction with states. The functions will only do
 * operation with states and that's it
 */

import { connect } from "react-redux";
import { removeTodo } from "../../actions/todo";

// markComplete - removeTodo action
function TodoUsingRedux({ todos, markComplete }) {
  return (
    <section>
      {todos?.map((todo, idx) => (
        <div key={idx} onClick={() => markComplete(todo.id)}>
          {todo.title} ✅
        </div>
      ))}
    </section>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoUsingRedux);
