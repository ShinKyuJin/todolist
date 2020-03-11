import React, { useState } from 'react';
import moment from 'moment';
import './Calendar.scss';

let count = 0;
let dayCount = 0;

const Calendar: React.FC = () => {
  const today = moment();
  const target = moment(today);
  const [month, setMonth] = useState(target.format('MMMM'));
  const [year, setYear] = useState(target.format('YYYY'));

  const getTargetMonth = () => (target.subtract(count, 'months'));
  const getDaylist = () => {
    const cal = [];
    for (let day = 6; day >= 1; day--) {
      cal.push(moment(target).subtract(day, 'days').format('DD'));
    }
    cal.push(today.format('DD'));
    for (let day = -1; day >= -6; day--) {
      cal.push(moment(target).subtract(day, 'days').format('DD'));
    }

    return cal;
  }
  const getToday = () => (moment().format('DD'));

  const daylist = getDaylist().map(
    (day) => (
      day === getToday() ?
      <div className="calendar__body__daylist__today" key={dayCount++}>
        {day}
      </div> :
      <div className="calendar__body__daylist__day" key={dayCount++}>
        {day}
      </div>
    )
  );

  const handleDecreaseMonth = () => {
    count = count + 1;
    setMonth(getTargetMonth().format('MMMM'));
    if (month.toString() === 'January') {
      const changedYear = parseInt(year, 10) - 1;
      setYear(changedYear.toString());
    }
  }
  
  const handleIncreaseMonth = () => {
    count = count - 1;
    setMonth(getTargetMonth().format('MMMM'));
    if (month.toString() === 'December') {
      const changedYear = parseInt(year, 10) + 1;
      setYear(changedYear.toString());
    }
  }

  

  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__header__btn-left" onClick={handleDecreaseMonth}>&lt;</div>
        <div className="calendar__header__month">{month}</div>
        <div className="calendar__header__year">{year}</div>
        <div className="calendar__header__btn-right" onClick={handleIncreaseMonth}>&gt;</div>
      </div>
      <div className="calendar__body">
        <div className="calendar__body__daylist">
          {daylist}
        </div>
      </div>
    </div>
  );
}


export default Calendar;