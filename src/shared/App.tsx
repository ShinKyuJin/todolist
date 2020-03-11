import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from '../components/calendar';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="components">
      <Route exact path="/" component={Calendar} />
    </div>
  )
};

export default App;