import React, { useState } from 'react';
import { todo } from '../../modules/todos';
import comment from '../../assets/comment.png';
import './Todo.scss';
import useModifyTodo from '../../hooks/useModifyTodo';
import useChangeTodoStatus from '../../hooks/useChangeTodoStatus';
import useDelTodo from '../../hooks/useDelTodo';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useChangeTodoStart from '../../hooks/useChangeTodoStart';
import useChangeTodoEnd from '../../hooks/useChangeTodoEnd';

type todoProps = {
  todo: todo;
}

const Todo = ({ todo }: todoProps) => {
  const [dbSubject, setDbSubject] = useState(true); 
  const [subject, setSubject] = useState(todo.subject);
  const modifySubjectTodo = useModifyTodo();
  const changeTodoStatus = useChangeTodoStatus();

  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }

  const handleConfirmSubject = () => {
    modifySubjectTodo(todo.id, subject);
    setDbSubject(!dbSubject);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirmSubject();
    }
  }

  const cur = moment(todo.start).format('MM-DD');
  const due = moment(todo.end).format('MM-DD');

  const dbClickSubjectInput = (
    <div>
      <input 
        type="text"
        className="list__table__td__subject-modify" 
        onChange={handleChangeSubject}
        value={subject}
        onKeyPress={handleKeyPress}
        autoFocus
      />
      <button type="button" onClick={handleConfirmSubject}>확인</button>
    </div>
  )

  const handleModifySubject = () => {
    setDbSubject(!dbSubject);
  }

  const handleChangeStatus = () => {
    changeTodoStatus(todo.id, (todo.status + 1) % 3);
  }

  const delTodo = useDelTodo();

  const handleDelTodo = () => {
    delTodo(todo.id);
  }

  const changeTodoStart = useChangeTodoStart();
  const changeTodoEnd = useChangeTodoEnd();
  const handleChangeStartlt = () => {
    changeTodoStart(todo.id, -1);
  }
  const handleChangeStartgt = () => {
    changeTodoStart(todo.id, 1);
  }
  const handleChangeEndlt = () => {
    changeTodoEnd(todo.id, -1);
  }
  const handleChangeEndgt = () => {
    changeTodoEnd(todo.id, 1);
  }


  return (
    <tr className="list__table__row">
      <td className="list__table__row__subject" onDoubleClick={handleModifySubject}>
        {
          dbSubject ?
          todo.subject :
          dbClickSubjectInput
        }
      </td>
      <td className="list__table__row__detail">
        <Link to={todo.id.toString()}>
          <img src={comment} alt="comment" />
        </Link>
      </td>
      <td className="list__table__td__start">
        <span onClick={handleChangeStartlt}>&lt;</span>
        {cur}
        <span onClick={handleChangeStartgt}>&gt;</span>
      </td>
      <td className="list__table__td__end">
        <span onClick={handleChangeEndlt}>&lt;</span>
        {due}
        <span onClick={handleChangeEndgt}>&gt;</span>
        <button onClick={handleChangeStatus} className="list__table__td__end__btn-change">C</button>
        <button onClick={handleDelTodo} className="list__table__td__end__btn-remove">&times;</button>
      </td>
    </tr>
  );
}

export default Todo;