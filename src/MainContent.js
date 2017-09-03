import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Balance from './Balance';

class MainContent extends Component {
  render() {
    return (
    	<div className="main">
    		<Balance/>
     		<h1 className="page-header"></h1>
     	</div>
    );
  }
}

export default MainContent;
