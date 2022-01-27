import { useContext, useState } from "react";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.types";
import TodoContext from "../context/todo-context";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodoContext);

  const submit = (e) => {
    e.preventDefault();

    if (title === "") return alert("Please enter title");
    const todoPayload = {
      id: v4(),
      title,
    };
    dispatch({
      type: ADD_TODO,
      payload: todoPayload,
    });

    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Enter todo title"
        id="todo"
        name="todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default TodoForm;
