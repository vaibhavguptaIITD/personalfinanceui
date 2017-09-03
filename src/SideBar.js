import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SideBar extends Component {
  render() {
    return (
      <ul className="nav nav-sidebar">
        <li className="active">
          Balance
        </li>
      </ul>
    );
  }
}

export default SideBar;
