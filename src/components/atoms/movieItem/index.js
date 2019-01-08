import React from 'react';
import Column from '../column/index';
import Overview from '../overview/index';

class MovieItem extends React.Component {
  render() {
    const movie = this.props;
    return (
      <Column className="item rounded" width={5.8} >
        <div className="item-poster">
          <img src={"https://image.tmdb.org/t/p/w500" + movie.poster} className="poster-img" alt="" />
        </div>
        <div className="item-content">
          <div className="item-content-details">
            <header>
              <p className="title">{movie.title}</p>
              <span className="release-date">{movie.release}</span>
            </header>
            <Overview text={movie.overview}></Overview>
            <div className="item-genres">
              <span className="item-genre rounded mr">Action</span>
              <span className="item-genre rounded mr">Science fiction film</span>
              <span className="item-genre rounded">Comedy</span>
            </div>
          </div>
          <div className="item-more-link">
            <a href={'/movie/' + movie.id}>More...</a>
          </div>
        </div>
      </Column>
    )
  }
}

export default MovieItem;