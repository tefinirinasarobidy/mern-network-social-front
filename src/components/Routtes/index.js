import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Index";
import Register from "../../pages/Register/Index";

function Index() {
  const token_store = useSelector((state) => state.token);
  const token_local = localStorage.getItem("token");

  const PrivateRoute = ({ children }) => {
    return token_store != null || token_local ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  };

  const PrivateRegister = ({ children }) => {
    return token_store != null || token_local ? <Navigate to="/" /> : children;
  };
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PrivateRegister>
            <Login />
          </PrivateRegister>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateRegister>
            <Register />
          </PrivateRegister>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default Index;
