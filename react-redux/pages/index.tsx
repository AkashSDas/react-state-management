import TodoUsingRedux from "../component/todo-using-redux";
import TodoForm from "../component/todo-using-redux/todo-form";

function Index() {
  return (
    <main>
      <TodoForm />
      <TodoUsingRedux />
    </main>
  );
}

export default Index;
