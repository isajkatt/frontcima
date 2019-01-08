import React from 'react';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <a className="label cursor-text">Sort by:</a>
        </li>
        <li>
          <a className="active rounded">Date</a>
        </li>
        <li>
          <a>Rating</a>
        </li>
        <li>
          <a>Views</a>
        </li>
      </ul>
      <ul className="float-right">
        <li>
          <a className="label cursor-text">View as:</a>
        </li>
        <li>
          <a>List</a>
        </li>
        <li>
          <a className="active rounded">Grid</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;