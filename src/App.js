import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";
import "./css/Style.css";

class App extends React.Component {
  // ==========================
  // STATE 
  //===========================
  state = {
    users: [],
    searchedUsers: [],
    loading: false
  }

  // ==========================
  // METHODS
  // ==========================

  //FETCH RECENT USERS ON HOME PAGE
  componentDidMount = () => {
    this.setState({ loading: true });
    fetch("https:/api.github.com/users", {
      apikey: process.env.REACT_APP_GITHUB_CLIENT_ID
    })
      .then(res => res.json())
      .then(res => this.setState({ users: res, loading: false }))
      .catch(error => console.log(`Sorry, there's been an error ${error}`));
  }
  // SEARCH FOR GITHUB USERS
  formSubmit = value => {
    if (value != "") {
      this.setState({loading: true})
      fetch(`https:/api.github.com/search/users?q=${value}`, {
        apikey: process.env.REACT_APP_GITHUB_CLIENT_ID
      })
        .then(res => res.json())
        .then(res => this.setState({ searchedUsers: res.items, loading: false }))
        .catch(error => console.log(`Error: ${error}`));
        
    } else {
      alert("You must enter something");
    };
  };

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
                  isLoading={this.state.loading}
                />
              )}
            />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
