import React, { useState } from 'react';
import moment from 'moment';
import './Modalform.scss';
import useAddTodo from '../../hooks/useAddTodo';

const current = moment().format('YYYY-MM-DD');
let curTime = moment(current);
let dueTime = moment(current);

const compareMoment = (timeA: string, timeB: string) => {
  if (moment(timeA) > moment(timeB)) return 1;
  else if (moment(timeA) < moment(timeB)) return -1;
  else return 0;
}

const Modalform: React.FC = () => {
  const [cur, setCur] = useState(curTime.format('MM-DD'));
  const [due, setDue] = useState(dueTime.format('MM-DD'));

  const handleCurAddDay = () => {
    const tmpTime = moment(curTime);
    tmpTime.add(1, 'days');
    if (compareMoment(tmpTime.format('YYYY-MM-DD'), dueTime.format('YYYY-MM-DD')) !== 1) {
      setCur(curTime.add(1, 'days').format('MM-DD'));
    }
    else {
      return;
    }
  };
  const handleCurSubDay = () => {
    setCur(curTime.add(-1, 'days').format('MM-DD'));
  };
  const handleDueAddDay = () => {
    setDue(dueTime.add(1, 'days').format('MM-DD'));
  };
  const handleDueSubDay = () => {
    const tmpTime = moment(dueTime);
    tmpTime.add(-1, 'days');
    if (compareMoment(curTime.format('YYYY-MM-DD'), tmpTime.format('YYYY-MM-DD')) !== 1) {
      setDue(dueTime.add(-1, 'days').format('MM-DD'));
    }
    else {
      return;
    }
  };

  const [subject, setSubject] = useState('');
  const handleChangeSubject = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <textarea 
              className="modal__form__input"
              onChange={handleChangeSubject} 
              placeholder="제목" 
              onKeyPress={handleKeyPress} 
              autoFocus />
            <div className="modal__form__wrapper">
              <p className="modal__form__wrapper__caption">시작 날짜</p>
              <p className="modal__form__wrapper__curTime">{cur}</p>
              <button type="button" onClick={handleCurAddDay}>+</button>
              <button type="button" onClick={handleCurSubDay}>-</button>
            </div>
            <div className="modal__form__wrapper">
              <p className="modal__form__wrapper__caption">마감 날짜</p>
              <p className="modal__form__wrapper__dueTime">{due}</p>
              <button type="button" onClick={handleDueAddDay}>+</button>
              <button type="button" onClick={handleDueSubDay}>-</button>
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