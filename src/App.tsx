import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/Views/forms/loginform";
//import PrivateRoute from "./components/routes/privateroute";
import RegisterForm from "./components/Views/forms/registerform";
import { AuthContext } from "./components/auth/authContext";
import Home from "./components/Views/home/home";
import CharacterCard from "./components/Views/characters/character";

function App() {
  const currentUser = useContext(AuthContext);
  const noUser = currentUser === null;
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            // noUser ? <Navigate to="/login" /> : 
            <Home />}
        />
        <Route path="/character/:characterId" element={<CharacterCard />} />
      </Routes>
    </Router>
  );
}

export default App;
