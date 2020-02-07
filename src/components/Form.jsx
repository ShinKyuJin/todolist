import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      detail: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreate = () => {
    const { subject, detail } = this.state;
    const { addTodo } = this.props;
    addTodo(subject, detail);
    this.setState({
      subject: '',
      detail: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  render() {
    const { subject, detail } = this.state;
    return (
      <div className="form">
        <input
          className="form-subject"
          name="subject"
          value={subject}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          className="form-detail"
          name="detail"
          value={detail}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button type="button" onClick={this.handleCreate}>
          추가
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { addTodo })(Form);
