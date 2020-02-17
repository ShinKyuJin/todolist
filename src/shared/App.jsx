import React from 'react';
import { Route } from 'react-router-dom';
import Todotemplate from '../components/Todotemplate/Todotemplate';
import Todomodify from '../components/Todomodify/Todomodify';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Todotemplate} />
        <Route path="/:itemId" component={Todomodify} />
      </div>
    );
  }
}

export default App;
