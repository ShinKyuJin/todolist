import React from 'react';
import Form from 'components/Form/Form';
import Todolist from 'components/Todolist/Todolist';
import './Todotemplate.scss';

class Todotemplate extends React.Component {
  render() {
    return (
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
  }
}

export default Todotemplate;
