import { Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = true;

  return isAuth ? children : null;
}

export default ProtectedRoute;
