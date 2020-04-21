import React, { Component } from "react";

export class UserItem extends Component {
  state = {
    id: "id",
    login: "jideabdqudus",
    avatar_url: "https://avatars0.githubusercontent.com/u/45945474?v=4",
    html_url: "https://github.com/jideabdqudus",
  };

  render() {
      const {id, login, avatar_url, html_url} = this.state
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "60px" }}
        />
        <a href={html_url}>Click to See more</a>
      </div>
    );
  }
}

export default UserItem;
