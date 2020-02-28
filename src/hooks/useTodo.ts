import useTodos from "./useTodos";

const useTodo = (id: number) => {
  const todos = useTodos();
  const todo = todos.map((target) => {
    if (target.id === id) {
      return target;
    }
    // else 경우 없음
  });

  return todo;
}

export default useTodo;
