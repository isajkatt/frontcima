import React from "react";
import Container from "../atoms/container/index";
import Row from "../atoms/row/index";

const NavBar = props => {
  return (
    <Container>
      <Row>
        <nav className="cursor-pointer">
          <a className="text-decoration-none" href="/" />
          {/* <img src="public\images\frontcima.png" alt="" /> */}
          <span className="logo-label text-decoration-none">Frontcima</span>
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
      </Row>
    </Container>
  );
};

export default NavBar;