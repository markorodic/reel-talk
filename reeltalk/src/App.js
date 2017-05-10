import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeSection />    
      </div>
    )
  }
}

class CommentSection extends Component {
  render() {
    return (
      <h1>Comments</h1>
    )
  }
}

class HomeSection extends Component {
  render() {
    return (
      <div className="container">
        <h1>Read comments while you watch a film</h1>
        <h4>Just type the name of the film you want to watch and press start at the same time as your film</h4>
        <input
          type="text"
          onChange=
          {
            this.onSearchChange
          }
        />
        <span className="results">
        </span>
        <button>Start film</button>
      </div>
    )
  }
}

export default App;
