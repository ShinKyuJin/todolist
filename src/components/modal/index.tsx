import React, { useState } from 'react';
import moment from 'moment';
import './Modalform.scss';
import useAddTodo from '../../hooks/useAddTodo';

let addCur: number = 0;
let addDue: number = 0;

const Modalform: React.FC = () => {
  const current = moment().format('YYYY-MM-DD');

  const curTime = moment(current);
  const dueTime = moment(current);

  const [cur, setCur] = useState(curTime.format('MM-DD'));
  const [due, setDue] = useState(dueTime.format('MM-DD'));

  const handleCurAddDay = () => {
    setCur(curTime.add(++addCur, 'days').format('MM-DD'));
  };
  const handleCurSubDay = () => {
    setCur(curTime.add(--addCur, 'days').format('MM-DD'));
  };
  const handleDueAddDay = () => {
    setDue(dueTime.add(++addDue, 'days').format('MM-DD'));
  };
  const handleDueSubDay = () => {
    setDue(dueTime.add(--addDue, 'days').format('MM-DD'));
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
    addCur = 0;
    addDue = 0;
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
        <div className="modal-overlay" onClick={handleClickOutModal} />
      }
      {
        click &&
        <div className="modal">
          <div className="modal__caption">할 일 추가하기</div>
          <div className="modal__form">
            <input type="text" onChange={handleChangeSubject} placeholder="제목" onKeyPress={handleKeyPress} autoFocus />
            <div className="modal__form__wrapper">
              <p className="modal__form__wrapper__caption">시작 날짜</p>
              <p className="modal__form__wrapper__curTime">{cur}</p>
              <button type="button" onClick={handleCurAddDay}>+1</button>
              <button type="button" onClick={handleCurSubDay}>-1</button>
            </div>
            <div className="modal__form__wrapper">
              <p className="modal__form__wrapper__caption">마감 날짜</p>
              <p className="modal__form__wrapper__dueTime">{due}</p>
              <button type="button" onClick={handleDueAddDay}>+1</button>
              <button type="button" onClick={handleDueSubDay}>-1</button>
            </div>
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