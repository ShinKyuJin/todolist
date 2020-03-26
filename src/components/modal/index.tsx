import React, { useState } from 'react';
import moment from 'moment';
import './Modalform.scss';
import useAddTodo from '../../hooks/useAddTodo';


const Modalform: React.FC = () => {
  const current = moment().format('YYYY-MM-DD');

  const curTime = moment(current);
  const dueTime = moment(current);

  const [cur, setCur] = useState(curTime.format('MMM DD'));
  const [due, setDue] = useState(dueTime.format('MMM DD'));
  const [addCur, setAddCur] = useState(0);
  const [addDue, setAddDue] = useState(0);

  const handleCurAddDay = () => {
    setAddCur(addCur + 1);
    setCur(curTime.add(addCur, 'days').format('MMM DD'));
  };
  const handleCurSubDay = () => {
    setAddCur(addCur - 1);
    setCur(curTime.add(addCur, 'days').format('MMM DD'));
  };
  const handleDueAddDay = () => {
    setAddDue(addDue + 1);
    setDue(dueTime.add(addDue, 'days').format('MMM DD'));
  };
  const handleDueSubDay = () => {
    setAddDue(addDue - 1);
    setDue(dueTime.add(addDue, 'days').format('MMM DD'));
  };

  const [subject, setSubject] = useState('');
  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const addTodo = useAddTodo();
  const handleClickAdd = () => {
    addTodo(subject, cur, due);
    setClick(!click);
    setSubject('');
    setCur(curTime.format('MM-DD'));
    setDue(dueTime.format('MM-DD'));
    setAddCur(0);
    setAddDue(0);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClickAdd();
    }
  }

  const handleClickOutModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClick(!click);
  }


  return (
    <React.Fragment>
      {
        click &&
        <div className="modal-overlay" onClickCapture={handleClickOutModal} />
      }
      {
        click &&
        <div className="modal">
          <div className="modal__form">
              <input type="text" onChange={handleChangeSubject} placeholder="할 일을 적어주세요" onKeyPress={handleKeyPress} autoFocus />
              <p className="modal__form__curTime">{cur}</p>
              <button type="button" onClick={handleCurAddDay}>+1</button>
              <button type="button" onClick={handleCurSubDay}>-1</button>
              <p className="modal__form__dueTime">{due}</p>
              <button type="button" onClick={handleDueAddDay}>+1</button>
              <button type="button" onClick={handleDueSubDay}>-1</button>
              <br />
              <button type="button" onClick={handleClickAdd} className="modal__form__add">추가</button>
          </div>
        </div>
      }

      {
        !click && <button onClick={handleClick} className="btn-add">+</button>
      }
    </React.Fragment>
  );
};

export default Modalform;