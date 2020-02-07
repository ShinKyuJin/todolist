import React from 'react';
import { connect } from 'react-redux';
import { modifyTodo } from '../actions';

class Todomodify extends React.Component {
    constructor(props) {
        const { match } = props;
        super(props);
        this.state = {
            itemId: match.params.itemId,
            subject: this.props.todoList[match.params.itemId].subject,
            detail: this.props.todoList[match.params.itemId].detail,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleClick = () => {
        this.props.modifyTodo(parseInt(this.state.itemId), this.state.subject, this.state.detail);
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
                <input type="text" name="detail" value={this.state.detail} onChange={this.handleChange} />
                <button onClick={this.handleClick}>완료</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoApp.todoList,
    }
}

export default connect(mapStateToProps, { modifyTodo })(Todomodify);