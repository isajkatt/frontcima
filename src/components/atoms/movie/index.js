import React from "react";
import Column from "../column/index";
import Genres from "../genres/index";

class Movie extends React.Component {
  render() {
    const movie = this.props;
    return (
      <Column className="item rounded" width={12}>
        <div className="item-poster">
          <img
            width="300"
            className="rounded"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster}
            alt={movie.title}
          />
        </div>
        <div className="item-content">
          <header>
            <h1>
              {movie.title} ({movie.release})
            </h1>
            {/* <Genres genres={movie.genres} /> */}
          </header>
          <p>Overview</p>
          <p>{movie.overview}</p>
        </div>
      </Column>
    );
  }
}

export default Movie;