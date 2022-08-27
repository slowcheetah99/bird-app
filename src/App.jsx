import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import { BirdProvider } from "./helpers/context/context";
import { generatePosts } from "../Seed.mjs";

function App() {
  // useEffect(() => {
  //   generatePosts();
  // }, []);
  return (
    <div className="App">
      <BirdProvider>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/:post" element={<Dashboard />} />
        </Routes>
      </BirdProvider>
    </div>
  );
}

export default App;
