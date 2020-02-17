import React from 'react';
import { connect } from 'react-redux';
import { modifyTodo } from 'actions';

class Todomodify extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props;
    const { todoList } = this.props;
    this.state = {
      itemId: match.params.itemId,
      subject: todoList[match.params.itemId].subject,
      detail: todoList[match.params.itemId].detail,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    const { itemId, subject, detail } = this.state;
    const { modifyTodo, history } = this.props;
    // eslint-disable-next-line radix
    modifyTodo(parseInt(itemId), subject, detail);
    history.goBack();
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const { subject, detail } = this.state;
    return (
      <div>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <input
          type="text"
          name="detail"
          value={detail}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button type="button" onClick={this.handleClick}>
          완료
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoApp.todoList,
});

export default connect(mapStateToProps, { modifyTodo })(Todomodify);
