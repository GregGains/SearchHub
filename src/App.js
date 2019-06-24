import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";
import "./css/Style.css";

class App extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Search" render={() => <Search />} />
            <Route exact path="/About" component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
