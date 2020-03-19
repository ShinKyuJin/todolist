import React from 'react';
import useTodos from '../../hooks/useTodos';
import Todo from '../todo';
import todoStatus from '../../modules/todos';

import './Todolist.scss';

const Todolist: React.FC = () => {
  const todos = useTodos();

  let key = 0;
  const mappingList = todos.map((todo) =>
    <Todo todo={todo} key={key++} />
  );

  const tmp = todoStatus.name;
  console.log(tmp);

  return (
    <div className="list">
      <table className="list__table">
        <thead>
          <tr>
            <th className="list__table__th__subject"></th>
            <th className="list__table__th__start">detail</th>
            <th className="list__table__th__start">Updated</th>
            <th className="list__table__th__end">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {mappingList}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;