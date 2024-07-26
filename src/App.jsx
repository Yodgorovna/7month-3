import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ background: "url('../src/assets/bg1.jpg')" }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
