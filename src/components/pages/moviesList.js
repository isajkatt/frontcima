"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../../actions/moviesActions';

class MoviesList extends React.Component {

  componentDidMount(){
    // Dispatch an action
    this.props.getMovies();
  }

  render() {
    const moviesList = this.props.movies.map(function (moviesArr) {
      return (
        <div key={moviesArr.id}>
          <h2>{moviesArr.title}</h2>
          <h2>{moviesArr.description}</h2>
        </div>
      )
    })
    return (
      <div>
        <h1>Movies List:</h1>
        {moviesList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMovies: getMovies
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);