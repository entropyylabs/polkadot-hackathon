import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;