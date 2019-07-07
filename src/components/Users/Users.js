import React from "react";
import { NavLink } from "react-router-dom";

export default function Users({ avatar, login }) {
  return (
    <React.Fragment>
      <li className="user">
        <img src={avatar} title={login} alt={login} />
        <h5>{login}</h5>
        <NavLink className="" to={`/user/${login}`}>
          Profile
        </NavLink>
      </li>
    </React.Fragment>
  );
}
