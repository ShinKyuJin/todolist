import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modifyTodo } from '../../actions';
import './Todomodify.scss';

class Todomodify extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    todoList: PropTypes.objectOf.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { match, todoList } = this.props;
    const { itemId } = match.params;
    const findTodo = todoList.find((todo) => todo.itemId === parseInt(itemId, 10));
    const { subject, detail } = findTodo;
    this.state = {
      itemId,
      subject,
      detail,
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
    const { itemId, subject, detail } = this.state;
    const { dispatch, history } = this.props;
    dispatch(modifyTodo(parseInt(itemId, 10), subject, detail));
    history.goBack();
  };

  render() {
    const { subject, detail } = this.state;
    const { handleChangeSubject, handleChangeDetail, handleClick } = this;
    return (
      <div className="modify">
        <input className="modify__subject" value={subject} onChange={handleChangeSubject} />
        <input className="modify__detail" value={detail} onChange={handleChangeDetail} />
        <button className="modify__btn-submit" type="button" onClick={handleClick}>완료</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

export default connect(mapStateToProps)(Todomodify);
