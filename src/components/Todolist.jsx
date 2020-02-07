import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';

import { toggleTodo, removeTodo } from '../actions';

class Todolist extends React.Component {
  handleToggle = (itemId) => {
    toggleTodo(itemId);
  };

  handleRemove = (itemId) => {
    removeTodo(itemId);
  };

  render() {
    const { todoList } = this.props;
    const mappingList = todoList.map(({
      itemId, subject, detail, checked,
    }) => (
      <Todo
        key={itemId}
        itemId={itemId}
        subject={subject}
        detail={detail}
        checked={checked}
        onToggle={this.handleToggle}
        onRemove={this.handleRemove}
      />
    ));

    return <div className="wrapper">{mappingList}</div>;
  }
}

Todolist.propTypes = {
  todoList: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

export default connect(mapStateToProps, { toggleTodo, removeTodo })(Todolist);
