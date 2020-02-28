import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { modifyTodo } from "../modules/todos";

const useModifyTodo = (id: number) => {
  const dispatch = useDispatch();
  return useCallback((subject: string, detail: string) => dispatch(modifyTodo(id, subject, detail)), [
    dispatch,
    id,
  ]);
}

export default useModifyTodo;