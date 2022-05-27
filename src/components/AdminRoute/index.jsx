import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.authReducer);

  return (
    <>
      {Object.keys(user).length !== 0 && user.role === "admin" ? (
        <Outlet />
      ) : (
        <Navigate to="/admin" />
      )}
    </>
  );
};

export default PrivateRoute;
