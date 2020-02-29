import { useSelector } from "react-redux";
import { rootState } from "../modules";

const useTodo = (id: number) => {
  const todos = useSelector((state: rootState) => state.todos);
  const todo = todos.map((target) => {
    if (target.id === id) {
      return target;
    }
    // else 경우 없음
  });

  return todo;
}

export default useTodo;
