import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

import { toggleTodo, removeTodo } from '../actions';

class Todolist extends React.Component {
    handleToggle = (itemId) => {
        this.props.toggleTodo(itemId);
    }
    handleRemove = (itemId) => {
        this.props.removeTodo(itemId);
    }

    render() {
        const todoList = this.props.todoList.map(
            ({ itemId, subject, detail, checked }) => (
                <Todo
                    key={itemId}
                    itemId={itemId}
                    subject={subject}
                    detail={detail}
                    checked={checked}
                    onToggle={this.handleToggle}
                    onRemove={this.handleRemove} />
            )
        );

        return (
            <div className="wrapper">
                {todoList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoApp.todoList
    };
};

export default connect(mapStateToProps, { toggleTodo, removeTodo })(Todolist);
