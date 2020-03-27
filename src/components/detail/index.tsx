import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import useTodos from '../../hooks/useTodos';
import useAddTodoDetail from '../../hooks/useAddTodoDetail';

let detailKey: number = 0;
const Tododetail: React.FC<RouteComponentProps<{ stringID: string }>> = (props) => {
  const { stringID } = props.match.params;
  const { history } = props;
  const id = parseInt(stringID, 10);

  const todos = useTodos();
  const [todo] = todos.filter((todo) => todo.id === id);

  const [detail, setDetail] = useState('');
  const handleChangeDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  }

  const addTodoDetail = useAddTodoDetail();
  const handleClickAdd = () => {
    addTodoDetail(id, detail);
    setDetail('');
  }

  return (
    <div>
      <input type="text" value={detail} onChange={handleChangeDetail} />
      <button type="button" onClick={handleClickAdd}>add</button>
      <div>
        {todo.detail.map((str) => (
          <div key={detailKey++}>{str}</div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Tododetail);
