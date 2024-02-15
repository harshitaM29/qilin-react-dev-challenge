import React, { Fragment, lazy, Suspense } from "react";
import Header from "./components/Layout/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContextProvider } from "./context/ThemeContext";
import SimpleComponent from "./components/Logger/SimpleComponent";

//lazy loading for ensuring better performance of the app
const Registration = lazy(() =>
  import("./components/FormValidation/RegistrationForm")
);
const SearchBar = lazy(() => import("./components/APIFetch/SearchBar"));
const About = lazy(() => import("./components/Main/About"));
const App = () => {
  const renderLoader = () => <p>Loading...</p>;

  return (
    <Fragment>
      <Header />
      <ThemeContextProvider>
        <ThemeSwitcher />
      </ThemeContextProvider>
      {/* Switch component for ensuring rendering of component only when path is matched */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Suspense fallback={renderLoader()}>
            <Registration />
          </Suspense>
        </Route>
        <Route path="/github">
          <Suspense fallback={renderLoader()}>
            <SearchBar />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense fallback={renderLoader()}>
            <About />
          </Suspense>
        </Route>
      </Switch>
      <SimpleComponent />
    </Fragment>
  );
};

export default App;
