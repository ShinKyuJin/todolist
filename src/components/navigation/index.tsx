import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="template__nav">
        <Link to='#' className="template__nav__link">Menu1</Link>
        <Link to='#' className="template__nav__link">Menu2</Link>
        <Link to='#' className="template__nav__link">Menu3</Link>
        <Link to='#' className="template__nav__link">Menu4</Link>
      </div>
    )
  }
}

export default Navigation;