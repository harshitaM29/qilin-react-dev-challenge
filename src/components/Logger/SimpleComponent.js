import React from "react";
import Logger from "./Logger";

//implemented simple component for tracking lifecycle methods
const SimpleComponent = () => {
  return <div></div>;
};

export default Logger(SimpleComponent);
