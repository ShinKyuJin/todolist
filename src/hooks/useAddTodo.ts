import { useDispatch } from "react-redux"
import { useCallback } from "react";
import { addTodo } from "../modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  
  return useCallback((subject, until) => dispatch(addTodo(subject, until)), [dispatch]);
}

export default useAddTodo;