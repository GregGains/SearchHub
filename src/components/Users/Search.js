import React, { Component } from "react";
import Users from "./Users";
import Spinner from "./../Includes/Spinner"
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
    const { searchedUsers, isLoading, getuser } = this.props;

    if (isLoading) {
      return <Spinner />;
    } else {
      
        return (
          <div className="search">
           
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
            <ul className="searched-list">
              {searchedUsers.map(user => (
                <Users
                  
                  key={user.id}
                  avatar={user.avatar_url}
                  url={user.html_url}
                  login={user.login}
                  getuser={getuser}
                />
              ))}
            </ul>
          </div>
        );
      }
    
  }
}
