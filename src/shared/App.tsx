import React from 'react';
import { Route } from 'react-router-dom';
import Tasktemplate from '../components/template';

import './App.scss';
import Tododetail from '../components/detail';

const App: React.FC = () => {
  return (
    <div className="components">
      <Route exact path="/" component={Tasktemplate} />
      <Route path="/:stringID" component={Tododetail} />
    </div>
  )
};

export default App;