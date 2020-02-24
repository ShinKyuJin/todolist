import React from 'react';
import './Todo.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  static propTypes = {
    itemId: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const {
      itemId, subject, detail, checked, onToggle, onRemove,
    } = this.props;
    return (
      <div className="todo">
        <div className={`todo__subject ${checked ? 'todo__checked' : ''}`}>{subject}</div>
        <div className={`todo__detail ${checked ? 'todo__checked' : ''}`}>{detail}</div>
        <button type="button" className="todo__btn-remove" onClick={() => onRemove(itemId)}>
          &times;
        </button>
        <Link className="todo__btn-modify" to={`${itemId}`}>
          MOD
        </Link>
        <button type="button" className="todo__btn-toggle" onClick={() => onToggle(itemId)}>
          DONE
        </button>
      </div>
    );
  }
}

export default Todo;
