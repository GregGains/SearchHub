import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Home from "./components/Home";
import Search from "./components/Users/Search";
import User from "./components/Users/User";
import About from "./components/About";

import GithubState from "./context/github/GithubState";

import "./css/Style.css";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Header />

          <div className="container">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Search" render={() => <Search />} />
            <Route
              exact
              path="/user/:login"
              render={props => <User {...props} />}
            />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
