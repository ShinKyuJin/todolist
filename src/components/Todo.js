import React from 'react';
import './Todo.scss';

class Todo extends React.Component {
    render() {
        const {subject,detail,checked,onToggle,onRemove} = this.props;
        return (
            <div className="todo-wrapper" onClick={() => onToggle(subject)}>
                <div className="subject">
                    {subject}
                </div>
                <div className="detail">
                    {detail}
                </div>
                <div>
                    {
                        checked && (<div className="checked"></div>)
                    }
                </div>
                <button onClick={() => onRemove(subject)}>
                    X
                </button>
            </div>
        )
    }
}

export default Todo;