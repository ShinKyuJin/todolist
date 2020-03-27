import { useDispatch } from "react-redux"
import { useCallback } from "react";
import { addTodoDetail } from "../modules/todos";

const useAddTodoDetail = () => {
  const dispatch = useDispatch();
  
  return useCallback((id: number, detail: string) => (
    dispatch(addTodoDetail(id, detail))),[dispatch]);
}

export default useAddTodoDetail;