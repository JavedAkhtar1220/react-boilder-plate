import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { user } = useSelector((state) => state.authReducer);

  return <>{user.length !== 0 ? <Navigate to="/" /> : <Outlet />}</>;
};

export default PublicRoute;
