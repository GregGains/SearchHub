import React, { useState, useContext } from "react";
import Users from "./Users";
import Spinner from "./../Includes/Spinner";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const { formSubmit, searchedUsers, loading } = githubContext;

  const [value, setValue] = useState("");

  const handleValueChange = e => setValue(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();

    formSubmit(value);

    setValue("");
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="search">
        <form method="GET" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-search"
            placeholder="Search all users..."
            onChange={handleValueChange}
            value={value}
          />

          <input type="submit" className="form-button" value="Search" />
        </form>
        <ul className="searched-list">
          {searchedUsers.map(user => (
            <Users
              key={user.id}
              avatar={user.avatar_url}
              url={user.html_url}
              login={user.login}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default Search;
