import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";

import Categories from "./pages/Categories";
import Budget from "./pages/Budget";
import Goals from "./pages/Goals";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import supabase from "./services/supabase";

import { useDispatch } from "react-redux";
import { fetchUserAsync, setUserIsNotLogged } from "./features/User/userSlice";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function chekcIfThereIsUSer() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        dispatch(fetchUserAsync(session.user.id));
      } else {
        dispatch(setUserIsNotLogged());
      }
    }
    chekcIfThereIsUSer();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="budget" element={<Budget />} />
          <Route path="goals" element={<Goals />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
