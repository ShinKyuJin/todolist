import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { delTodo } from "../modules/todos";

const useDelTodo = () => {
  const dispatch = useDispatch();

  return useCallback(
    (id: number) => dispatch(delTodo(id)), [dispatch]
  );
};

export default useDelTodo;