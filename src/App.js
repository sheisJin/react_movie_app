import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title: "Matrix",
    poster: "http://cfile230.uf.daum.net/image/120165194C241D693330B4"
  },
  {
    title: "full metal Jacket",
    poster: "http://mblogthumb4.phinf.naver.net/20120612_175/taelove79_1339458744796e7jSI_JPEG/%B8%DE%C5%BB3.jpg?type=w2"
  },
  {
    title: "Oldboy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztEwbh_k9ZSK0bSt1vxC25kbQ_Yg8To460wUddnPmtlH8rYTM"
  },
  {
    title: "Star Wars",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
  }
]

class App extends Component {

  // Render : componentWillMount() [api에 요청할때] ->  render() -> componentDidMount()
  // Update  componentWillReceiveProps() -> shouldComponentUpdate() == true ->  render() -> componentDidUpdate()

  state = {
    greeting : 'hello!',
  }

  componentDidMount(){  //did Mount 되었을때
    setTimeout(() => {
      this.setState({
        greeting : 'hello again!'
      })
    }, 2000)
  }


  render() {
    return (  
      <div className="App">
        {this.state.greeting}
        {movies.map((movie , index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
