import React from 'react';
import Todolist from '../list';
import Form from '../form';

import './template.scss';

const Todotemplate: React.FC = () => {
  return (
    <div className="template">
      <div className="template__name">오늘 할 일</div>
      <div className="template__list"><Todolist /></div>
      <div className="template__form"><Form /></div>
    </div>
  );
};

export default Todotemplate;