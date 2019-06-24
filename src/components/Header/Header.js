import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/gh.svg"
export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={Logo} className="github" alt="logo" />
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/Search">Search</NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>

      </header>
    </div>
  );
}
