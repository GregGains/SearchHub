import React, { useContext } from "react";
import Context from "../../context/github/githubContext";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/gh.svg";

export default function Header() {
  const context = useContext(Context);
  const { clearUserState } = context;

  return (
    <div>
      <header>
        <nav>
          <a href="https://github.com/GregGains/SearchHub">
            <img src={Logo} className="github" alt="logo" />
          </a>
          <NavLink exact to="/" onClick={clearUserState}>
            Home
          </NavLink>
          <NavLink to="/Search" onClick={clearUserState}>
            Search
          </NavLink>
          <NavLink to="/About" onClick={clearUserState}>
            About
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
