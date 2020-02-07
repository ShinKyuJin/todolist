import React from 'react';
import './Todo.scss';
import { Link } from 'react-router-dom';

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

export default Todo;
