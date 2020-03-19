import { useDispatch } from "react-redux"
import { useCallback } from "react";
import { modifyTodoSubject } from "../modules/todos";

const useModifyTodo = () => {
  const dispatch = useDispatch();
  
  return useCallback(
    (id: number, subject: string) => 
    dispatch(modifyTodoSubject(id, subject)), [dispatch]);
}

export default useModifyTodo;