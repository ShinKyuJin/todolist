import React from 'react';
import moment from 'moment';
import './Calendar.scss';

const Calendar: React.FC = () => {
  const curTime = moment();
  const curMonth = curTime.format('MMMM');
  const curYear = curTime.format('YYYY');


  const getDaylist = () => {
    const calendar = [];
    for (let month = 1; month <= 12; month++) {
      calendar.push({
        month: moment(`YYYY-${month}-01`).format('MMM')
      });
      for (let day = 1; day <= moment(curTime.format(`YYYY-${month}`)).daysInMonth(); day++) {
        if (moment(`YYYY-${month}-${day}`).weekday() === 6 || moment(`YYYY-${month}-${day}`).weekday() === 0) {
          calendar.push({
            day,
            isWeekend: true
          });
        }
        else {
          calendar.push({
            day,
            isWeekend: false
          });
        }
      }
    }

    return calendar;
  }

  let key = 0;
  const day = getDaylist().map((day) => (
    day.month === undefined ?
      <div className={day.isWeekend ? 'calendar__body__daylist__day calendar__body__daylist__weekend' : 'calendar__body__daylist__day'} key={key++}>
        {day.day}
      </div>
      :
      <div className="calendar__body__daylist__month" key={key++} id={day.month}>{day.month}</div>
  ));


  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__header__year">{curYear}</div>
        <div className="calendar__header__month">{curMonth}</div>
      </div>
      <div className="calendar__body">
        <div className="calendar__body__daylist">
          {day}
        </div>
      </div>
      <button type="button" className="calendar__btn-addtodo">+</button>
    </div>
  );
}


export default Calendar;