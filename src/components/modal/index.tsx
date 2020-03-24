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

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [subject, setSubject] = useState('');
  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
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

  return (
    <div className="modal">
      <div className="modal__form">
        {
          click &&
          <div className="modal__form__body">
            <input type="text" onChange={handleChangeSubject} />
            <p className="modal__form__body__curTime">{cur}</p>
            <button type="button" onClick={handleCurAddDay}>+1</button>
            <button type="button" onClick={handleCurSubDay}>-1</button>
            <p className="modal__form__body__dueTime">{due}</p>
            <button type="button" onClick={handleDueAddDay}>+1</button>
            <button type="button" onClick={handleDueSubDay}>-1</button>
            <br />
            <button type="button" onClick={handleClickAdd}>추가</button>
            <button type="button" onClick={handleClick}>취소</button>
          </div>
        }
      </div>
      <div className="modal__make">
        {
          !click &&
          <button type="button" onClick={handleClick} className="modal__make__btn">+</button>
        }
      </div>
    </div>
  );
};

export default Modalform;