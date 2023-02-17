import "./App.css";
import { Routes, Route } from "react-router-dom";
import useWindowDimensions from "./utils/useWindowDimensions";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Celebration from "./pages/Celebration";
import Clue2 from "./pages/WordPuzzle";
import Geoguesser from "./pages/Geoguesser";
import Geoguesser2 from "./pages/Geoguesser2";
import Cam from "./pages/Cam";
import Hunts1 from "./pages/Hunts";

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
          <Route path="/clue2" element={<Clue2 height={height} />} />
          <Route path="/geoguesser" element={<Geoguesser />} />
          <Route path="/geoguesser2" element={<Geoguesser2 />} />
          <Route path="/cam" element={<Cam />} />
          <Route path="/hunts" element={<Hunts1 />} />
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
