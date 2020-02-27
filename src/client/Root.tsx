import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;