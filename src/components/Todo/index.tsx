import React from 'react';
import { todo } from '../../modules/todos';
import useTodoActions from '../../hooks/useTodoActions';
import { Link } from 'react-router-dom';
import './Todo.scss';

export type todoProps = {
  todo: todo;
};

const Todo = ({ todo }: todoProps) => {
  const { onToggle, onRemove } = useTodoActions(todo.id);
  return (
    <div className="todo">
      <div className={`todo__subject ${todo.checked ? 'todo__checked' : ''}`}>{todo.subject}</div>
      <div className={`todo__detail ${todo.checked ? 'todo__checked' : ''}`}>{todo.detail}</div>
      <div className='todo__btn-remove' onClick={onRemove}>삭제</div>
      <div className='todo__btn-modify'>
        <Link className="link" to={`${123}`}>수정</Link>
      </div>
      <div className='todo__btn-toggle' onClick={onToggle}>완료</div>
    </div>
  );
}

export default Todo;