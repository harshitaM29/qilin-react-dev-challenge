import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.navBar}>
      <div className={classes.home}>
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </NavLink>
      </div>
      <div className={classes.register}>
        <NavLink
          to="/register"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          Registration
        </NavLink>
      </div>
      <div className={classes.user}>
        <NavLink
          to="/github"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          GithubUser
        </NavLink>
      </div>
      <div className={classes.about}>
        <NavLink to="/about" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
