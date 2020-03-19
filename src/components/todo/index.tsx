import React, { useState } from 'react';
import { todo } from '../../modules/todos';
import comment from '../../assets/comment.png';
import './Todo.scss';
import useModifyTodo from '../../hooks/useModifyTodo';

type todoProps = {
  todo: todo;
}

const Todo = ({ todo }: todoProps) => {
  const [dbSubject, setDbSubject] = useState(true); 
  const [subject, setSubject] = useState(todo.subject);
  const modifySubjectTodo = useModifyTodo();

  const handleChangeModifySubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }

  const handleClickModifyConfirm = () => {
    modifySubjectTodo(todo.id, subject);
    setDbSubject(!dbSubject);
  }

  const dbClickSubjectInput = (
    <div>
      <input type="text" className="list__table__td__subject-modify" onChange={handleChangeModifySubject} value={subject} />
      <button type="button" onClick={handleClickModifyConfirm}>확인</button>
    </div>
  )

  const handleModifySubject = () => {
    setDbSubject(!dbSubject);
  }


  return (
    <tr className="list__table__td">
      <td className="list__table__td__subject" onDoubleClick={handleModifySubject}>
        {
          dbSubject ?
          todo.subject :
          dbClickSubjectInput
        }
      </td>
      <td className="list__table__td__detail">
        <img src={comment} alt="comment" />
      </td>
      <td className="list__table__td__start">{todo.start}</td>
      <td className="list__table__td__end">{todo.end}</td>
    </tr>
  );
}

export default Todo;