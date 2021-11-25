import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import RegisterForm from "./components/registerform";
import ShowData from "./components/showdata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<ShowData />} />
      </Routes>
    </Router>
  );
}

export default App;
