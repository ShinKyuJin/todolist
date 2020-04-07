import React from 'react';
import './Tasktemplate.scss';
import Navigation from '../navigation';
import Modalform from '../modal';
import Todolist from '../list';
import { todoStatus } from '../../modules/todos';

const Tasktemplate: React.FC = () => {
  return (
    <div className="template">
      <Navigation />
      <Todolist status={todoStatus.PROGRESS} />
      <Todolist status={todoStatus.HOLD} />
      <Todolist status={todoStatus.DONE} />
      <Modalform />
    </div>
  );
}


export default Tasktemplate;