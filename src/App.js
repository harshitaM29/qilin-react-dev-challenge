import React, { Fragment } from "react";

import RegistrationForm from "./components/FormValidation/RegistrationForm";
import SearchBar from "./components/APIFetch/SearchBar";

const App = () => {
  return (
    <Fragment>
      <RegistrationForm />
      <SearchBar />
    </Fragment>
  );
};

export default App;
