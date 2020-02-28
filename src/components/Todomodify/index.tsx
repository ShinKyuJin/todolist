import React, { useState } from 'react';
import useTodos from '../../hooks/useTodos';

const Todomodify = () => {
  const [subject, setSubject] = useState('');
  const [detail, setDetail] = useState('');

  const onChangeSubject = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSubject(e.target.value);
  }

  const onChangeDetail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDetail(e.target.value);
  }

  const onClick = (e: React.MouseEvent): void => {
    e.preventDefault();

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