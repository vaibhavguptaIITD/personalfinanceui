import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BalanceGraph from './BalanceGraph';

class Balance extends Component {
  render() {
    return (
    	<div>
    		<h1 className="page-header">Balance</h1>
     		<div className="row">
     			<div className="col-xs-12">
     				<BalanceGraph account="Assets"/>
     			</div>
     			<div className="col-xs-12">
     				<BalanceGraph account="Expenses"/>
     			</div>
     			<div className="col-xs-12">
     				<BalanceGraph account="Income"/>
     			</div>
     		</div>
     	</div>
    );
  }
}

export default Balance;
