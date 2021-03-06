import * as React from "react";
import { useContext } from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const currentUser = useContext(AuthContext);
  if (currentUser === null) return <Navigate to="/login" />;
  else {
    return <Route {...rest} />;
  }
};

export default PrivateRoute;
