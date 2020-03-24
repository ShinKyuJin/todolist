import { useDispatch } from "react-redux"
import { useCallback } from "react";
import { changeTodoStatus } from "../modules/todos";

const useChangeTodoStatus = () => {
  const dispatch = useDispatch();

  return useCallback(
    (id: number, status: number) =>
    dispatch(changeTodoStatus(id, status)), [dispatch]
    );
};

export default useChangeTodoStatus;