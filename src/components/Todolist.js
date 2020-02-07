import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

import { toggleTodo,removeTodo } from '../actions';

class Todolist extends React.Component {
    handleToggle = (subject) => {
        this.props.toggleTodo(subject);
    }
    handleRemove = (subject) => {
        this.props.removeTodo(subject);
    }

    render() {
        const todoList = this.props.todoList.map(
            ({ subject, detail, checked }) => (
                <Todo
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

export default connect(mapStateToProps, { toggleTodo,removeTodo })(Todolist);
