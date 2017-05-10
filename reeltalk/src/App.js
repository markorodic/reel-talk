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
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      info: "",
      poster: "", 
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    if (event.target.value == "") {
      this.setState({ title: "" })
    } 
    const film = event.target.value
    const api = "https://api.themoviedb.org/3/search/movie?api_key=575b74c4fb492c60dcffb594bd3869b2&language=en-US&query=" + film + "&page=1&include_adult=false"
    const xhttp = new XMLHttpRequest()
    xhttp.open("POST", api, false)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send()
    const response = JSON.parse(xhttp.responseText)["results"][0]
    const name = response["original_title"]
    const description = response["overview"]
    this.setState(
      {
        title: name,
        info: description
      }
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Read comments while you watch a film</h1>
        <h3>Just type the name of the film you want to watch and press start at the same time as your film</h3>
        <input
          type="text"
          onChange=
          {
            this.onSearchChange
          }
        />
        <span className="results">
          <h4>{this.state.title}</h4>
          <p>{this.state.info}</p>
        </span>
        <button>Start film</button>
      </div>
    )
  }
}

export default App;
