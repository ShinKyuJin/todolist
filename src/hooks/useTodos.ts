import { useSelector } from "react-redux"
import { rootState } from "../modules"

const useTodos = () => {
  const todos = useSelector((state: rootState) => state.todos);
  
  return todos;
}

export default useTodos;