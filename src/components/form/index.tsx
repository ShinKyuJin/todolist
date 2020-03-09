import React, { useState } from 'react';
import useAddTodo from '../../hooks/useAddTodo';


const Form: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [until, setUntil] = useState("");

  const addTodo = useAddTodo();

  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }

  const handleChangeUntil = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUntil(e.target.value);
  }

  const handleCreate = () => {
    if (until === '') {
      addTodo(subject, until);
    }
    else {
      addTodo(subject, until);
    }

    setSubject("");
    setUntil("");
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  }

  return (
    <div>
      <input
        onChange={handleChangeSubject}
        onKeyPress={handleKeyPress}
        value={subject}
      />
      <input
        onChange={handleChangeUntil}
        onKeyPress={handleKeyPress}
        value={until}

      />
      <button type="button" onClick={handleCreate}>!!!</button>
    </div>
  );
};

export default Form;