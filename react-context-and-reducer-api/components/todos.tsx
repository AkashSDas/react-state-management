import { useContext } from "react";
import { REMOVE_TODO } from "../context/action.types";
import TodoContext from "../context/todo-context";

function Todos() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <section>
      {todos?.map((todo, key) => (
        <div
          key={key}
          onClick={() => {
            dispatch({
              type: REMOVE_TODO,
              payload: todo.id,
            });
          }}
        >
          {todo.title} ✅
        </div>
      ))}
    </section>
  );
}

export default Todos;
