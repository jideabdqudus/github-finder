import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav style={{ marginBottom: "30px" }} className="blue">
          <div className="nav-wrapper">
          <a href ="#" className = "brand-logo left"><i className="large material-icons">insert_chart</i>Github Finder</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
