import React, { useState } from 'react';
import { todo } from '../../modules/todos';

import './todo.scss';

type todoProps = {
  todo: todo;
}

const Todo: React.FC<todoProps> = ({ todo }: todoProps) => {
  const [status, setStatus] = useState("-ing");

  return (
    <tr>
      <td className="todo__subject">{todo.subject}</td>
      <td className="todo__comment">aa</td>
      <td className="todo__until">{todo.until}</td>
      <td className="todo__status">{status}</td>
    </tr>
  );
};

export default Todo;