import React from "react";
import { Navigate } from "react-router-dom";
export default function PrivateRoute(props) {
  const { isPrivate, children } = props;
  const name=localStorage.getItem('persone')
  return !name && isPrivate === true ? (
    <Navigate to="/login" />
  ) : (
    <main>{children}</main>
  );
}
