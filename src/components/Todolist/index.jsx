import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../../actions';
import Todo from '../Todo';


class Todolist extends React.Component {
  static propTypes = {
    todoList: PropTypes.objectOf.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
  };

  render() {
    const { todoList } = this.props;
    const { handleToggle, handleRemove } = this.props;
    const mappingList = todoList.map(({
      itemId, subject, detail, checked,
    }) => (
      <Todo
        key={itemId}
        itemId={itemId}
        subject={subject}
        detail={detail}
        checked={checked}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    ));

    return <div className="wrapper">{mappingList}</div>;
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggle: (itemId) => dispatch(toggleTodo(itemId)),
  handleRemove: (itemId) => dispatch(removeTodo(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
