import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <button className="nav-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className="nav-list">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/">Summary</Link>
        </li>
        <li className="item">
          <Link to="/education">Education</Link>
        </li>
        <li className="item">
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
