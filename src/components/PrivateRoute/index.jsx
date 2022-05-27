import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
const PrivateRoute = () => {
  const { user } = useSelector((state) => state.authReducer);

  return <>{user.length !== 0 ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
