import React, { Component } from 'react';
import Home from './Home'
import '../App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <Home/>
      </div>
    );
  }
}


export default App;
