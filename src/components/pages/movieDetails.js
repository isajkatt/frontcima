"use strict";

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovieDetails } from "../../actions/moviesActions";
import Container from "../atoms/container/index";
import Row from "../atoms/row/index";
import Movie from "../atoms/movie/index";

class MovieDetails extends React.Component {

  componentWillMount() {
    // Dispatch an action
    this.props.getMovieDetails(this.props.match.params.id);
  }

  render() {
    const movie = this.props.movieDetails;
    return (
      <div className="bg-white rounded pt-5">
        <Container>
          <Row>
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster_path}
              release={movie.release_date} />
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetails: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      getMovieDetails: getMovieDetails
    },dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);