import React from "react";
import Users from "./Users/Users";
import Spinner from "./Includes/Spinner";

export default function Home({ users, loading }) {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="home">
        <h1>Github Finder</h1>
        <h3>Popular Repositories</h3>
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
