import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from './router.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Here is the Landing</h1>
        <p>Hello</p>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about/faq'>FAQ</Link>
        <Link to='/people'>People</Link>
        { router }
      </div>
    );
  }
}

export default App;
