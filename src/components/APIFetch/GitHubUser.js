import React, { Fragment } from "react";
import classes from "./GitHubUser.module.css";
import useFetchedData from "./useFetchedData";

const GitHubUser = ({ username }) => {
  //created custom hook for avoiding repetitive code writing for same logic
  const { data, error } = useFetchedData(
    `https://api.github.com/users/${username}`
  );
  const repoList = useFetchedData(data.repos_url);

  return (
    <div className={classes.container}>
      {!error ? (
        <Fragment>
          <div className={classes.profile}>
            <img src={data.avatar_url} alt="profile" />
            <h4>{data.login}</h4>
          </div>
          <div className={classes.repo}>
            <ul>
              {repoList.data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </Fragment>
      ) : (
        <h3>Something went wrong. Please try again </h3>
      )}
    </div>
  );
};

export default GitHubUser;
