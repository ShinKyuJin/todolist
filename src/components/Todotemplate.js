import React from 'react';
import Form from './Form';
import Todolist from './Todolist';
import './Todotemplate.scss';

class Todotemplate extends React.Component {
  render() {
    return (
      <div className="whole-wrapper">
        <div>
          To-do List
              </div>
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