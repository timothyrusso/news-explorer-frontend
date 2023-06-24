import React, { FC, ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
  loggedIn: string | null;
  path: string;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, ...props }) => {
  return (children &&
    (props.loggedIn ? (
      children
    ) : (
      <Navigate to={props.path} />
    ))) as ReactElement | null;
};

export default ProtectedRoute;
