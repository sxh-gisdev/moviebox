import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Views/forms/loginform";
import PrivateRoute from "./components/routes/privateroute";
import RegisterForm from "./components/Views/forms/registerform";
import ShowData from "./components/Views/home/showdata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <ShowData />
            // </PrivateRoute>
          }
        />
        {/* <Route path="/" element={<ShowData />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
