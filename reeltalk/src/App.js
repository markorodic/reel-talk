import React, { Component } from 'react';
import './App.css';

const poster = ""

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: <HomeSection />,
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage() {
    this.setState({ component: <CommentSection title={poster}/>  })
  }

  render() {
    return (
      <div className="App">
        {this.state.component}
        <button
          onClick={() => this.changePage()}
          >
          Start film
        </button>
      </div>
    )
  }
}

class CommentSection extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="commentContainer">
        <img src={title}/>
      </div>
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
    const image = "http://image.tmdb.org/t/p/w185/" + response["poster_path"]
    this.setState(
      {
        title: name,
        info: description,
        poster: image
      }
    )
  }

  render() {
    const { title } = this.props
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
          {poster = this.state.poster}
        </span>
      </div>
    )
  }
}

export default App;
