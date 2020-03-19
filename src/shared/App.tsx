import React from 'react';
import { Route } from 'react-router-dom';
import Tasktemplate from '../components/template';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="components">
      <Route exact path="/" component={Tasktemplate} />
    </div>
  )
};

export default App;