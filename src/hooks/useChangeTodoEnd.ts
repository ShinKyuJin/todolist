import { useDispatch } from "react-redux"
import { useCallback } from "react";
import { changeTodoEnd } from "../modules/todos";

const useChangeTodoEnd = () => {
  const dispatch = useDispatch();

  return useCallback((id: number, add: number) => dispatch(changeTodoEnd(id, add)), [dispatch]);
}

export default useChangeTodoEnd;