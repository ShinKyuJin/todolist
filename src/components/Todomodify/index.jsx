import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modifyTodo } from '../../actions';
import './Todomodify.scss';

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
    const { modify, history } = this.props;
    modify(parseInt(itemId, 10), subject, detail);
    history.goBack();
  }

  render() {
    const { subject, detail } = this.state;
    const {
      handleChangeSubject,
      handleChangeDetail,
      handleClick,
    } = this;
    return (
      <div className="modify">
        <input className="modify__subject" value={subject} onChange={handleChangeSubject} />
        <input className="modify__detail" value={detail} onChange={handleChangeDetail} />
        <button className="modify__btn-submit" type="button" onClick={handleClick}>완료</button>
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
  todoList: PropTypes.objectOf.isRequired,
  modify: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  modify: (itemId, subject, detail) => dispatch(modifyTodo(itemId, subject, detail)),
});

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todomodify);
