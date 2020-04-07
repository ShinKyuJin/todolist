import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { changeTodoStart } from "../modules/todos";

const useChangeTodoStart = () => {
  const dispatch = useDispatch();

  return useCallback((id: number, add: number) => dispatch(changeTodoStart(id, add)),[dispatch]);
}

export default useChangeTodoStart;