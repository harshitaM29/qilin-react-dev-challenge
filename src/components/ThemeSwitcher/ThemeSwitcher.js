import React, { useContext } from "react";
import classes from "./ThemeSwitcher.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

const ThemeSwitcher = () => {
  //consuming context API using react hooks
  const { theme, switchTheme } = useContext(ThemeContext);

  const handleThemeSwitch = () => {
    switchTheme();
  };
  return (
    <div className={classes.themeParent}>
      <button onClick={handleThemeSwitch}>Switch Theme</button>
      {!theme ? <LightTheme /> : <DarkTheme />}
    </div>
  );
};

export default ThemeSwitcher;
