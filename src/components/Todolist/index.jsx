import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../../actions';
import Todo from '../Todo';


class Todolist extends React.Component {
  handleToggle = (itemId) => {
    const { toggle } = this.props;
    toggle(itemId);
  };

  handleRemove = (itemId) => {
    const { remove } = this.props;
    remove(itemId);
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
  todoList: PropTypes.objectOf.isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (itemId) => dispatch(toggleTodo(itemId)),
  remove: (itemId) => dispatch(removeTodo(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
