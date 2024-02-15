import React, { useEffect, Component } from "react";

const Logger = (WrappedComponent) => {
  //tracking of lifecycle of component using hooks
  const Logging = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} updated.`);
    });

    return <WrappedComponent {...props} />;
  };

  return Logging;
  //tracking of lifecycle of component using class methods
  //   return class extends Component {
  //     componentDidMount() {
  //       console.log(`Component ${WrappedComponent.name} mounted`);
  //     }

  //     componentDidUpdate() {
  //       console.log(`Component ${WrappedComponent.name} updated`);
  //     }

  //     componentWillUnmount() {
  //       console.log(`Component ${WrappedComponent.name} will unmount`);
  //     }

  //     render() {
  //       return <WrappedComponent {...this.props} />;
  //     }
  //   };
};

export default Logger;
