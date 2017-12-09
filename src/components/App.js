import React, { Component } from 'react';
import Home from './Home'
import '../App.css';


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
          <h1 className="text-primary">Hey there, User</h1>
          <Home/>
      </div>
    );
  }
}


export default App;
