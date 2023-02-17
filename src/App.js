import "./App.css";
import { Routes, Route } from "react-router-dom";
import useWindowDimensions from "./utils/useWindowDimensions";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Protected from "./components/Protected";
import Celebration from "./pages/Celebration";
import Clue2 from "./pages/WordPuzzle";
import Geoguesser from "./pages/Geoguesser";
import Geoguesser2 from "./pages/Geoguesser2";
import Cam from "./pages/Cam";
import Hunts1 from "./pages/Hunts";
import Hunt from "./pages/Hunt";
import Passport from "./pages/Passport";
import PassportView from "./pages/PassportView";
import Sell from "./pages/Sell";
import Bid from "./pages/Bid";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const { height, width } = useWindowDimensions();
  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Hunts1 />
              </Protected>
            }
          />
          <Route
            path="/celebration"
            element={
              <Protected>
                <Celebration />
              </Protected>
            }
          />
          <Route
            path="/clue"
            element={
              <Protected>
                <Clue2 />
              </Protected>
            }
          />
          <Route
            path="/geoguesser"
            element={
              <Protected>
                <Geoguesser />
              </Protected>
            }
          />
          <Route
            path="/geoguesser2"
            element={
              <Protected>
                <Geoguesser2 />
              </Protected>
            }
          />
          <Route
            path="/cam"
            element={
              <Protected>
                <Cam />
              </Protected>
            }
          />
          <Route
            path="/hunts"
            element={
              <Protected>
                <Hunts1 />
              </Protected>
            }
          />
          <Route
            path="/hunt"
            element={
              <Protected>
                <Hunt />
              </Protected>
            }
          />
          <Route
            path="/passport"
            element={
              <Protected>
                <Passport />
              </Protected>
            }
          />
          <Route
            path="/passportview"
            element={
              <Protected>
                <PassportView />
              </Protected>
            }
          />
          <Route
            path="/sell"
            element={
              <Protected>
                <Sell />
              </Protected>
            }
          />
          <Route
            path="/bid"
            element={
              <Protected>
                <Bid />
              </Protected>
            }
          />
          <Route path="/splashscreen" element={<SplashScreen />} />
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
