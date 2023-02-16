import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Celebration from "./pages/Celebration";
import Word from "./pages/Word";

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
        <Route path="/celebration" element={<Celebration />} />
        <Route path="/word" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
