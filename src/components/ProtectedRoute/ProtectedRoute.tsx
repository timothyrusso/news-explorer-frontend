import React, { FC, ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
  authToken: string | null;
  path: string;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  authToken,
  path,
}): ReactElement | null => {
  return (children &&
    (authToken ? children : <Navigate to={path} />)) as ReactElement | null;
};

export default ProtectedRoute;
