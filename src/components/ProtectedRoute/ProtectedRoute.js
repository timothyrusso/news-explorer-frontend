import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
  return props.loggedIn ? children : <Navigate to={props.path} />;
};

export default ProtectedRoute;
