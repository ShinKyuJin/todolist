import React from 'react';
import Form from './Form';
import Todolist from './Todolist';

class Todotemplate extends React.Component {
    render() {
        return (
          <div className="whole-wrapper">
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