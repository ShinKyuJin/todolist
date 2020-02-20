import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Form.scss';
import { addTodo } from '../../actions';

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

  handleClick = () => {
    const { subject, detail } = this.state;
    const { add } = this.props;
    add(subject, detail);
    this.setState({
      subject: '',
      detail: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const { subject, detail } = this.state;
    const {
      handleChangeSubject, handleChangeDetail, handleClick, handleKeyPress,
    } = this;
    return (
      <div className="form">
        <input
          className="form__subject"
          value={subject}
          onChange={handleChangeSubject}
          onKeyPress={handleKeyPress}
        />
        <input
          className="form__detail"
          value={detail}
          onChange={handleChangeDetail}
          onKeyPress={handleKeyPress}
        />
        <button type="button" className="form__btn-add" onClick={handleClick}>
          작성
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (subject, detail) => dispatch(addTodo(subject, detail)),
});

export default connect(null, mapDispatchToProps)(Form);
