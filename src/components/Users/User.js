import React, { useEffect, useContext } from "react";
import Context from "../../context/github/githubContext";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../Includes/Spinner";

const User = ({ match }) => {
  const context = useContext(Context);
  const {
    getUser,
    getUserRepos,
    searchedUser,
    repo,
    clearUserState,
    loading
  } = context;
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    followers,
    following,
    public_repos,
    hireable
  } = searchedUser;

  useEffect(
    () => {
      getUser(match.params.login);
      getUserRepos(match.params.login);
    }, //eslint-disable-next-line
    []
  );

  //Destructure from context.provider state

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <section className="singleuser">
          <div className="user-display">
            <h1 className="login">{login}</h1>
            <img src={avatar_url} title="profile picture" alt={name} />
            <h1>{name}</h1>

            {location ? <h3>Location: {location}</h3> : ""}
            <p>
              {bio ? (
                <span className="bio">
                  Bio: {bio}
                  <br />
                </span>
              ) : (
                ""
              )}
              {blog ? (
                <span>
                  Blog: {blog}
                  <br />
                </span>
              ) : (
                ""
              )}
              Followers: {followers} <br />
              Following: {following} <br />
              Repositories: {public_repos} <br />
              Hireable{" "}
              {hireable ? (
                <span className="hireable">Yes</span>
              ) : (
                <span className="nothireable">No</span>
              )}
            </p>
          </div>
          <ul className="repositories">
            {public_repos ? <h1>Repos</h1> : ""}
            {repo.map(repo => (
              <Repos
                key={repo.id}
                name={repo.name}
                url={repo.html_url}
                created={repo.created_at}
              />
            ))}
          </ul>

          <Link className="back" to="/Search" onClick={clearUserState}>
            Back To Search
          </Link>
        </section>
      </React.Fragment>
    );
  }
};

export default User;
