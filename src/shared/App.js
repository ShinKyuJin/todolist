import React from 'react';
import {Route} from 'react-router-dom';
import Todotemplate from '../components/Todotemplate';

class App extends React.Component {
    render() {
        return (
          <div>
              <Route exact path="/" component={Todotemplate} />
          </div>  
        );
    }
}

export default App;