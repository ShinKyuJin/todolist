import { useDispatch } from "react-redux"
import { useCallback } from "react";
import { addTodo } from "../modules/todos";

const useAddTodo = () => {
  const dispatch = useDispatch();
  
  return useCallback(
    (subject: string, start: string, end: string) => 
    dispatch(addTodo(subject, start, end)), [dispatch]
    );
}

export default useAddTodo;