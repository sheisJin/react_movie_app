import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title: propTypes.string.isRequired,
        //isRequired 꼭 있어야 함.
        poster: propTypes.string.isRequired

    }

    render() {
        return (
            <div>
                <MoviePost poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePost extends Component {

    static propTypes = {
        poster: propTypes.string.isRequired
    }

    render(){
        return (
            <img src={this.props.poster} alt="Movie Poster" />
        )
    }
}

export default Movie;