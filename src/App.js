import "./App.css";
import { Routes, Route } from "react-router-dom";
import useWindowDimensions from "./utils/useWindowDimensions";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Celebration from "./pages/Celebration";
import Word from "./pages/Word";
import Clue2 from "./pages/Clue2";

function App() {
  const { height, width } = useWindowDimensions();
  const isMobile = width <= 768;

  if (isMobile) {
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
          <Route path="/clue2" element={<Clue2 height={height} />} />
        </Routes>
      </div>
    );
  }
  return (
    <div>
      Please open this link on a mobile device for the complete experience!
    </div>
  );
}

export default App;
