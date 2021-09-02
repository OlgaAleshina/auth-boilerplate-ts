import React from "react";

const PrivateRoute = ({children} : {children?: React.ReactNode}): JSX.Element => {
    return (
      <div>
        <div>PrivateRoute (routes/PrivateRoute.js)</div>
        { children }
      </div>
    );
  }

  export default PrivateRoute;