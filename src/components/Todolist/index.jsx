import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import { toggleTodo, removeTodo } from '../../actions';


class Todolist extends React.Component {
  static propTypes = {
    todoList: PropTypes.objectOf.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handleToggle = (itemId) => {
    const { dispatch } = this.props;
    dispatch(toggleTodo(itemId));
  }

  handleRemove = (itemId) => {
    const { dispatch } = this.props;
    dispatch(removeTodo(itemId));
  }

  render() {
    const { todoList } = this.props;
    const { handleToggle, handleRemove } = this;
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
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
