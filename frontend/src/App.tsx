import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Login/Register";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
