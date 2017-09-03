import React, { Component } from 'react';
import './App.css';
import BalanceGraph from './BalanceGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BalanceGraph account="Assets"/>
        <BalanceGraph account="Expenses"/>
        <BalanceGraph account="Income"/>
      </div>
    );
  }
}

export default App;
