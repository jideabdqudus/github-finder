import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-light">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/" className="bg-danger">Home</Link>
        </li>
        <li>
          <Link to="/about" className="bg-danger">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github-alt",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
