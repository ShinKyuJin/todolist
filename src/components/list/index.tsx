import React from 'react';
import useTodos from '../../hooks/useTodos';
import Todo from '../todo';
import { todoStatus } from '../../modules/todos';

import './Todolist.scss';

const Todolist: React.FC = () => {
  const todos = useTodos();

  let key = 0;
  const progressList = todos.map((todo) =>
    todo.status === todoStatus.PROGRESS ?
    <Todo todo={todo} key={key++} /> : null
  );

  const holdList = todos.map((todo) =>
    todo.status === todoStatus.HOLD ?
    <Todo todo={todo} key={key++} /> : null
  );

  const doneList = todos.map((todo) =>
    todo.status === todoStatus.DONE ?
    <Todo todo={todo} key={key++} /> : null
  );


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
          <span className="list__table__caption list__table__caption__progress">Progressing</span>
          {progressList}
          <br />
          <br />
          <span className="list__table__caption list__table__caption__hold">On Hold</span>
          {holdList}
          <br />
          <br />
          <span className="list__table__caption list__table__caption__done">Done</span>
          {doneList}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;