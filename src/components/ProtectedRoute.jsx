import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/apiUser";

function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      setIsLoading(true); //
      const userData = await getCurrentUser();
      setIsAuthenticated(userData?.role === "authenticated");
      setIsLoading(false);
    }

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return children;
}

export default ProtectedRoute;
