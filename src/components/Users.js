import React from "react";

export default function Users({avatar, login, url}) {
  return (
    <React.Fragment>
      <li className="user">
        <img src={avatar} title={login} alt="profile picture" />
        <h3>{login}</h3>
        <a href={url}>Profile</a>
      </li>
    </React.Fragment>
  );
}
