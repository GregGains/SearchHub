import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/gh.svg"
export default function Header({clearUserState}) {
  return (
    <div>
      <header>
        <nav>
          <img src={Logo} className="github" alt="logo" />
          <NavLink exact to="/" onClick={clearUserState}>Home</NavLink>
          <NavLink to="/Search" onClick={clearUserState}>Search</NavLink>
          <NavLink to="/About" onClick={clearUserState}>About</NavLink>
        </nav>

      </header>
    </div>
  );
}
