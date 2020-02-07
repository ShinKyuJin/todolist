import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from 'actions';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            detail: "",
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }
    handleCreate = () => {
        this.props.addTodo(this.state.subject,this.state.detail);
        this.setState({
            subject: "",
            detail: "",
        });
    }
    render() {
        return(
            <div>
                <input name="subject"value={this.state.subject} onChange={this.handleChange} />
                <input name="detail"value={this.state.detail} onChange={this.handleChange} />
                <button onClick={this.handleCreate}>추가</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state:state
    }
}

export default connect(mapStateToProps,{addTodo})(Form);