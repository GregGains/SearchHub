import React from "react";
import Users from "./Users";

export default function Home(props) {
  return (
    <div className="home">
      <h1>Home</h1>

      <h2>Popular Repositories</h2>
      <ul>
        {props.users.map(user => (
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
