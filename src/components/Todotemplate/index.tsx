import React from 'react';
import Form from '../Form';
import Todolist from '../Todolist';
import './Todotemplate.scss';

const Todotemplate = () => {
  return (
    <div className="whole-wrapper">
      <div className="app-name">오늘 할 일</div>
      <Form />
      <Todolist />
    </div>
  );
}

export default Todotemplate;