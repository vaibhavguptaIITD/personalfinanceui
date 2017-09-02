import React, { Component } from 'react';
import './App.css';
import BalanceGraph from './BalanceGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BalanceGraph/>
      </div>
    );
  }
}

export default App;
