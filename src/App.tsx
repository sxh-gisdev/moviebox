import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import PrivateRoute from "./components/privateroute";
import RegisterForm from "./components/registerform";
import ShowData from "./components/showdata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<ShowData />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
