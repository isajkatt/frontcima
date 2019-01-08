import React from "react";

const NavBar = props => {
  return (
    <nav className="cursor-pointer">
      <a href="/"><img src={props.logo} alt="" /></a>
      <span className="logo-label">Frontcima</span>
      <ul className="float-right">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup" className="sign-up rounded">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;