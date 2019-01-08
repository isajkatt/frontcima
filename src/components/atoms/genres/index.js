import React from "react";

const Genres = (props) => {
  const genres = props.genres;
  const listItems = genres.map((genre) =>
    <span className="item-genre rounded mr" key={genre.name}>
      {genre.name}
    </span>
  );
  return (
    <div className="item-genres">{listItems}</div>
  );
}

export default Genres;