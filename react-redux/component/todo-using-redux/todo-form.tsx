import { useState } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../actions/todo";

/**
 * Here useState is used because even if we're using redux we want
 * to collect information like form data here or more like loading state
 * and etc, all of these needs to either work only in the local state like
 * loading state will mostly used locally or to collect data to send as a
 * payload to store (redux) like form data
 */

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (title === "") return alert("Please add title");

    const todoPayload = {
      title,
      id: v4(),
    };
    addTodo(todoPayload);

    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter todo title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <button type="submit">Save</button>
    </form>
  );
}

// To bring any state from the redux store
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
