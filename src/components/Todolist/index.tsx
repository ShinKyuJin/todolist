import React from 'react';
import Todo from '../Todo';
import useTodos from '../../hooks/useTodos';

const Todolist = () => {
  const todos = useTodos();
  const mappingList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id} />
  ));

  return (
    <div>
      {mappingList}
    </div>
  );
};

export default Todolist;
