import React from 'react';
import useTodos from '../../hooks/useTodos';
import Todo from '../todo';

import './Todolist.scss';
import { todoStatus } from '../../modules/todos';

type listProps = {
  status: number;
}

const Todolist: React.FC<listProps> = ({status}: listProps) => {
  const todos = useTodos();

  let key = 0;

  const list = todos.filter((todo) => todo.status === status).map((todo) => (
    <Todo todo={todo} key={key++} />
  ));

  const clName = (
    status === todoStatus.PROGRESS ? 'progress' :
    (status === todoStatus.HOLD ? 'hold' : 'done')
  );

  return (
    <div className="list">
      {
        list.length > 0 ?
        <table className="list__table">
        <thead>
          <tr>
            <th className="list__table__th__subject"></th>
            <th className="list__table__th__start">상세</th>
            <th className="list__table__th__start">시작</th>
            <th className="list__table__th__end">마감</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`list__table__caption list__table__caption__${clName}`}></tr>
          {list}
        </tbody>
      </table> : null
      }
    </div>
  );
}

export default Todolist;