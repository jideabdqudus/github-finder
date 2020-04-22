import React, { Component } from "react";
import Users from "./Users"

export class UserItem extends Component {

  render() {
      const {login, avatar_url, html_url} = this.props.user
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <a href={html_url}>Click to See more</a>
      </div>
    );
  }
}

export default UserItem;
