import React, { useState } from 'react';
import useAddTodo from '../../hooks/useAddTodo';
import './Form.scss';

const Form = () => {
  const [subject, setSubject] = useState('');
  const [detail, setDetail] = useState('');
  const addTodo = useAddTodo();

  const onChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const onChangeDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };

  const onClick = () => {
    addTodo(subject, detail);
    setSubject('');
    setDetail('');
  }

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div className="form">
      <input
        placeholder="제목"
        className="form__subject"
        value={subject}
        onChange={onChangeSubject}
        onKeyPress={onKeyPress}
      />
      <input
        placeholder="내용"
        className="form__detail"
        value={detail}
        onChange={onChangeDetail}
        onKeyPress={onKeyPress}
      />
      <button type="button" className="form__btn-add" onClick={onClick}>추가</button>
    </div>
  );
}

export default Form;