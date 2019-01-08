import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Render : componentWillMount() [api에 요청할때] ->  render() -> componentDidMount()
  // Update  componentWillReceiveProps() -> shouldComponentUpdate() == true ->  render() -> componentDidUpdate()

  state = {
  }

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies // movies : movies
    })
  }

  _callApi = () => {
    return fetch('http://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json()) //potato 는 어떤 이름으로 해도 상관없다. console 에는 response 로 노출된다.
    .then(json => json.data.movies) //fetch 에서 받은 파일을 json 형태로 받아오는것.
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_corver_image} key={movie.id} />
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
