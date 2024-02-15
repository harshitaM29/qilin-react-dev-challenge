import React from "react";

const DarkTheme = () => {
  document.body.style.backgroundColor = "#292c35";
  return (
    <span style={{ float: "right", marginRight: "0.5rem" }}>
      You're in Dark Mode
    </span>
  );
};

export default DarkTheme;
