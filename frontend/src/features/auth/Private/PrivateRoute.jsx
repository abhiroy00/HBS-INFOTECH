import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    // Redirect with replace so the user can't go back to the previous protected route
    return <Navigate to="/login" replace />;
  }

  // Render the children routes if the user is authenticated
  return <Outlet />;
};

export default PrivateRoute;
