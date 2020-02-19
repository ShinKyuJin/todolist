import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Todomodify extends React.Component {
  constructor(props) {
    super(props);
    const { match, todoList } = this.props;
    const { itemId } = match.params;
    this.state = {
      itemId,
      subject: todoList[itemId].subject,
      detail: todoList[itemId].detail,
    };
  }

  handleChangeSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  }

  handleChangeDetail = (e) => {
    this.setState({
      detail: e.target.value,
    });
  }

  handleClick = () => {
    const { itemId, subject, detail } = this.state;
    const { modifyTodo, history } = this.props;
    modifyTodo(parseInt(itemId, 10), subject, detail);
    history.goBack(-1);
  }

  render() {
    const { subject, detail } = this.state;
    const {
      handleChangeSubject,
      handleChangeDetail,
      handleClick,
    } = this;
    return (
      <div>
        <input value={subject} onChange={handleChangeSubject} />
        <input value={detail} onChange={handleChangeDetail} />
        <button type="button" onClick={handleClick}>완료</button>
      </div>
    );
  }
}

Todomodify.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  todoList: PropTypes.func.isRequired,
  modifyTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  modifyTodo: (itemId, subject, detail) => {
    dispatch({
      type: 'MODIFY_TODO',
      itemId,
      subject,
      detail,
    });
  },
});

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todomodify);
