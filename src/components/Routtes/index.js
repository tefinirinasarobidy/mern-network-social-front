import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Index";
import Register from "../../pages/Register/Index"

function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default index;
