import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addTodo } from "../modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback((subject, detail) => 
  dispatch(addTodo(subject, detail)), [dispatch]);
}

export default useAddTodo;