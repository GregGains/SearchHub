import React, { Component } from "react";
import Users from "./Users";
import Noresult from "./Noresult";
import Spinner from "./Spinner";
export default class Search extends Component {
  state = {
    value: ""
  };

  handleValueChange = e => this.setState({ value: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.formSubmit(this.state.value);

    this.setState({ value: "" });
  };

  render() {
    const { searchedUsers, isLoading } = this.props;
    if (isLoading) {
      return <Spinner />;
    } else {
      
        return (
          <div className="search">
            <h1 />
            <form method="GET" onSubmit={this.handleFormSubmit}>
              <input
                type="text"
                className="form-search"
                placeholder="Search all users..."
                onChange={this.handleValueChange}
                value={this.state.value}
              />

              <input type="submit" className="form-button" value="Search" />
            </form>
            <ul className="users-list">
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
    
  }
}
