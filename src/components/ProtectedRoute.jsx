import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/apiUser";

function ProtectedRoute({ children, isDemoAccount, extractedData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      setIsLoading(true);
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
  if (isDemoAccount) {
    return children;
  }

  if (!isAuthenticated && !isDemoAccount && !extractedData.error_code) {
    navigate("/login");
    return null;
  }
  if (extractedData?.error_code) {
    console.log("usao ovdje");
    navigate("/expired");
    return null;
  }

  return children;
}

export default ProtectedRoute;
