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

  handleChangeSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };

  handleChangeDetail = (e) => {
    this.setState({
      detail: e.target.value,
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
          className="form__subject"
          name="subject"
          value={subject}
          onChange={this.handleChangeSubject}
          onKeyPress={this.handleKeyPress}
          placeholder="제목"
        />
        <input
          className="form__detail"
          name="detail"
          value={detail}
          onChange={this.handleChangeDetail}
          onKeyPress={this.handleKeyPress}
          placeholder="내용"
        />
        <button type="button" onClick={this.handleCreate}>
          추가
        </button>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { addTodo })(Form);
