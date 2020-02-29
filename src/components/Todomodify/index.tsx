import React, { useState } from 'react';
import useModifyTodo from '../../hooks/useModifyTodo';
import useTodo from '../../hooks/useTodo';
import { RouteComponentProps, RouteProps } from "react-router-dom";

interface RouteInfo extends RouteProps {
}


const Todomodify = (props: { history: RouteComponentProps, match: RouteComponentProps }) => {
  const { history, match } = props;
  console.log(history, match);
  const [todo] = useTodo(parseInt(match.params.id, 10));

  const [subject, setSubject] = useState('');
  const [detail, setDetail] = useState('');

  const modifyTodo = useModifyTodo(match.params.id);

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