import React from 'react';
import './Todo.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  render() {
    const {
      itemId, subject, detail, checked, onToggle, onRemove,
    } = this.props;
    return (
      <div className="todo-wrapper">
        <div className="subject">{subject}</div>
        <div className="detail">{detail}</div>
        <Link to={`${itemId}`}>수정</Link>
        <button type="button" onClick={() => onToggle(itemId)}>끝냄</button>
        <div>{checked && <div className="checked" />}</div>
        <button type="button" onClick={() => onRemove(itemId)}>X</button>
      </div>
    );
  }
}

Todo.propTypes = {
  itemId: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Todo;
