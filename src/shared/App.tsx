import React from 'react';
import Todotemplate from '../components/Todotemplate';
import { Route, Switch } from 'react-router-dom';
import Todomodify from '../components/Todomodify';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Todotemplate} />
      <Route path="/:id" component={Todomodify} />
    </Switch>
  );
}

export default App;