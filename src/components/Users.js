import React from "react";

export default function Users(props) {
  return (
    <React.Fragment>
      <li className="user">
        <img src={props.avatar} />
        <h3>{props.login}</h3>

        <a href={props.url}>Profile</a>
      </li>
    </React.Fragment>
  );
}
