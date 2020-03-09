import React from 'react';
import { Route } from 'react-router-dom';
import Todotemplate from '../components/template';

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Todotemplate} />
    </div>
  )
};

export default App;