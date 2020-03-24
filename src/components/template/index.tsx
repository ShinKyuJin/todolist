import React from 'react';
import './Tasktemplate.scss';
import Navigation from '../navigation';
import Modalform from '../modal';
import Todolist from '../list';

const Tasktemplate: React.FC = () => {
  return (
    <div className="template">
      <Navigation />
      <Todolist />
      <Modalform />
    </div>
  );
}


export default Tasktemplate;