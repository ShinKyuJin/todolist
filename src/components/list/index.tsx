import React from 'react';
import useTodos from '../../hooks/useTodos';
import Todo from '../todo';
import { todoStatus } from '../../modules/todos';

import './Todolist.scss';

const Todolist: React.FC = () => {
  const todos = useTodos();

  let key = 0;

  const progressList = todos.filter((todo) => todo.status === todoStatus.PROGRESS).map((todo) => (
    <Todo todo={todo} key={key++} />
  ));
  const holdList = todos.filter((todo) => todo.status === todoStatus.HOLD).map((todo) => (
    <Todo todo={todo} key={key++} />
  ));
  const doneList = todos.filter((todo) => todo.status === todoStatus.DONE).map((todo) => (
    <Todo todo={todo} key={key++} />
  ));

  return (
    <div className="list">
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
          {
            progressList.length > 0 ?
            <tr className="list__table__caption list__table__caption__progress"></tr> : null
          }
          {progressList}
          {
            holdList.length > 0 ?
            <tr className="list__table__caption list__table__caption__hold"></tr> : null
          }
          {holdList}
          {
            doneList.length > 0 ?
            <tr className="list__table__caption list__table__caption__done"></tr> : null
          }
          {doneList}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;