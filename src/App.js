import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CallbackPage from "./pages/CallbackPage";
import "./styles/App.css";

const App = () => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div id="root">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage accessToken={accessToken} />} />
        {/* <Route path="/auth/callback/github" element={<CallbackPage />} /> */}
        {/* <Route path="/auth/callback/twitter" element={<CallbackPage />} /> */}
        <Route path="/auth/callback/discord" element={<CallbackPage />} />
        <Route path="/auth/callback/google" element={<CallbackPage />} />
      </Routes>
    </div>
  );
};

export default App;
