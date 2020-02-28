import React, { useState } from 'react';
import useModifyTodo from '../../hooks/useModifyTodo';
import { RouteComponentProps } from 'react-router-dom';
import useTodo from '../../hooks/useTodo';

interface PathParams extends RouteComponentProps<any> {}

const Todomodify: React.FC<PathParams> = ({ history, match }) => {
  const [todo] = useTodo(parseInt(match.params.id, 10));
  console.log(todo.subject);

  const [subject, setSubject] = useState('');
  const [detail, setDetail] = useState('');

  const modifyTodo = useModifyTodo(parseInt(match.params.id, 10));

  const onChangeSubject = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSubject(e.target.value);
  }

  const onChangeDetail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDetail(e.target.value);
  }

  

  const onClick = (): void => {
    modifyTodo(subject, detail);
    history.goBack();
  }

  return (
    <div>
      <input
        onChange={onChangeSubject}
        value={subject}
      />
      <input
        onChange={onChangeDetail}
        value={detail}
      />
      <button type="button" onClick={onClick}>수정</button>
    </div>
  );
}

export default Todomodify;