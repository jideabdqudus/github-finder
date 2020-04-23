import React, { Component } from "react";

class UserItem extends Component {
  state = {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };

  render() {
      const {login, id, avatar_url, html_url} = this.state
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "60px" }}
        />
      </div>
    );
  }
}

export default UserItem;
