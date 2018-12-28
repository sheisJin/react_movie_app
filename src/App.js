import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Render : componentWillMount() [api에 요청할때] ->  render() -> componentDidMount()
  // Update  componentWillReceiveProps() -> shouldComponentUpdate() == true ->  render() -> componentDidUpdate()

  state = {
  }

  componentDidMount() {
    fetch('http://yts.ag/api/v2/list_movies.json?sort_by=rating')
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie , index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (  
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading" }
      </div>
    );
  }
}

export default App;
