import React from 'react';
import Form from '../Form';
import Todolist from '../Todolist';
import './Todotemplate.scss';

const Todotemplate = () => (
  <div className="whole-wrapper">
    <div className="app-name">오늘 할 일</div>
    <section className="form-wrapper">
      <Form />
    </section>
    <section className="todolist-wrapper">
      <Todolist />
    </section>
  </div>
);

export default Todotemplate;
