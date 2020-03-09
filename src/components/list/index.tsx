import React from 'react';
import useTodos from '../../hooks/useTodos';
import Todo from '../todo';

import './todolist.scss';

const Todolist: React.FC = () => {
  const todos = useTodos();
  let nextKey = 0;
  const mappingList = todos.map((todo) => (
    <Todo
      todo={todo}
      key={nextKey++}
    />
  ));

  return (
    <div>
      <table className="list">
        <thead className="list__head">
          <tr>
            <th>제목</th>
            <th>커멘트</th>
            <th>기한</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody className="list__body">
          {mappingList}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;