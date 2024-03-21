import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuth = true;

  return isAuth ? <Outlet /> : null;
}

export default ProtectedRoute;
