import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from '../Todo';


class Todolist extends React.Component {
  handleToggle = (itemId) => {
    const { toggleTodo } = this.props;
    toggleTodo(itemId);
  };

  handleRemove = (itemId) => {
    const { removeTodo } = this.props;
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
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todoList: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (itemId) => { dispatch({ type: 'TOGGLE_TODO', itemId }); },
    removeTodo: (itemId) => { dispatch({ type: 'REMOVE_TODO', itemId }); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
