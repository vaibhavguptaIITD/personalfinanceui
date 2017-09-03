import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar';
import MainContent from './MainContent';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <SideBar/>
          </div>
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
            <MainContent/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
