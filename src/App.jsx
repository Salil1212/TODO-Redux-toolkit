import AddTodo from "./components/Addtodo";
import Todos from "./components/Todos";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Learn about Redux toolkit. </h1>
      <AddTodo />
      <Todos />
    </>
  );
}
