import React from "react";

export default function Users(props) {
  return (
    <div className="users">
      <li className="user">
        <img src={props.avatar} />
        <h3>{props.login}</h3>

        <a href={props.url}>Repo</a>
      </li>
    </div>
  );
}
