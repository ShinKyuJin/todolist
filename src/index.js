import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';

import Reducers from 'reducers'
import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.render(
<Provider store={createStore(Reducers)}>
<Root />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
