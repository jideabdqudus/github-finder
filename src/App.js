import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/Users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  

  return (
    <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert/>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search/>
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
