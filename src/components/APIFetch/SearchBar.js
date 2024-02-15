import React, { useRef, useState } from "react";
import classes from "./GitHubUser.module.css";
import GitHubUser from "./GitHubUser";

const SearchBar = () => {
  const inputRef = useRef("");
  const [username, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setUserName(inputRef.current.value);
    setShow(true);
    inputRef.current.value = "";
  };
  return (
    <div className={classes.searchbar}>
      <input type="text" placeholder="Enter Github Username" ref={inputRef} />
      <button onClick={handleClick}>Search</button>
      {show && <GitHubUser username={username} />}
    </div>
  );
};

export default SearchBar;
