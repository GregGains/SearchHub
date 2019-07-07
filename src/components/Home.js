import React, { useContext, useEffect } from "react";
import Context from "../context/github/githubContext";
import Users from "./Users/Users";
import Spinner from "./Includes/Spinner";

export default function Home() {
  const context = useContext(Context);

  const { users, topUsers, loading } = context;

  useEffect(
    () => {
      topUsers();
    }, //eslint-disable-next-line
    []
  );

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="home">
        <h1>Github Finder</h1>
        <h2>Popular Repositories</h2>
        <ul className="users-list">
          {users.map(user => (
            <Users
              key={user.id}
              url={user.html_url}
              avatar={user.avatar_url}
              login={user.login}
              followers={user.followers_url}
              following={user.following_url}
              events={user.events_url}
            />
          ))}
        </ul>
      </div>
    );
  }
}
