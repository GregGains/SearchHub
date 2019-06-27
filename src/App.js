import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Home from "./components/Home";
import Search from "./components/Users/Search";
import User from "./components/Users/User"
import About from "./components/About";
import "./css/Style.css";

class App extends React.Component {
  // ==============================
  // STATE
  //===============================
  state = {
    users: [],
    searchedUsers: [],
    searchedUser: [],
    loading: false
  };

  // ==============================
  // METHODS
  // ==============================

  //FETCH RECENT USERS ON HOME PAGE
  componentDidMount = () => {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(res => this.setState({ users: res, loading: false }))
      .catch(error => console.log(`Sorry, there's been an error ${error}`));
  };
  // SEARCH FOR GITHUB USERS
  formSubmit = value => {
    if (value !== "") {
      this.setState({ loading: true });
      fetch(`https://api.github.com/search/users?q=${value}&?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        .then(res => res.json())
        .then(res =>
          this.setState({ searchedUsers: res.items, loading: false })
        )
        .catch(error => console.log(`Error: ${error}`));
    } else {
      alert("You must enter something");
    }
  };

  //GET SINGLE GITHUB USER
  getUser = username => {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(res => this.setState({ searchedUser: res, loading: false }))
      .catch(error => console.log(`Sorry, there's been an error ${error}`));
  };

  //GET SINGLE USER REPOSITORIES 

  // ===============================
  // RENDER
  // ===============================

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <div className="container">
            <Route
              exact
              path="/"
              render={() => (
                <Home users={this.state.users} loading={this.state.loading} />
              )}
            />
            <Route
              exact
              path="/Search"
              render={() => (
                <Search
                  formSubmit={this.formSubmit}
                  searchedUsers={this.state.searchedUsers}
                  searchedUser={this.state.searchedUser}
                  getuser={this.getUser}
                  isLoading={this.state.loading}
                />
              )}
            />
            <Route exact path="/user/:login" render={(props) => <User {...props} 
                                                                      getuser={this.getUser} 
                                                                      user={this.state.searchedUser} /> } />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
