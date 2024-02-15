import React, { Fragment } from "react";

import RegistrationForm from "./components/FormValidation/RegistrationForm";
import SearchBar from "./components/APIFetch/SearchBar";
import Header from "./components/Layout/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import About from "./components/Main/About";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        <Route path="/github">
          <SearchBar />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
