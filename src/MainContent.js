import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Balance from './Balance';

class MainContent extends Component {
  render() {
    return (
    	<div className="main">
    		<Balance/>
     	</div>
    );
  }
}

export default MainContent;
