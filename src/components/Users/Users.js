import React from "react";
import { NavLink } from "react-router-dom";

export default function Users({avatar, login, url, getuser}) {
  return (
    <React.Fragment>
      <li className="user">
        <img src={avatar} title={login} alt={login} />
        <h3>{login}</h3>
        <NavLink className="" to={`/user/${login}`}>Profile</NavLink>
      </li>
    </React.Fragment>
  );
}
