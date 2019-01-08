"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../../actions/moviesActions';
import MovieItem from '../atoms/movieItem/index';
import Container from '../atoms/container/index';
import Column from '../atoms/column/index';
import Row from '../atoms/row/index';

class MoviesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      page: 1
    };
  }

  componentDidMount() {
    // Dispatch an action
    this.props.getMovies(this.state.page);
  }

  loadMovies() {
    this.setState(state => ({
      page: state.page + 1
    }));
    this.props.getMovies(this.state.page);
  }

  render() {
    const moviesList = this.props.movies.map(function (moviesArr) {
      return (
        <MovieItem
          key={moviesArr.id}
          id={moviesArr.id}
          title={moviesArr.title}
          overview={moviesArr.overview}
          poster={moviesArr.poster_path}
          release={moviesArr.release_date} />
      )
    })
    return (
      <div className="bg-white rounded pt-5">
        <Container>
          <Row>
            <h1>Movies List:</h1>
            {moviesList}
          </Row>
          <Row>
            <Column className="text-center" width={12}>
              <button
                onClick={this.loadMovies.bind(this)}
                className="cursor-pointer rounded">Load more...</button>
            </Column>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMovies: getMovies
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);