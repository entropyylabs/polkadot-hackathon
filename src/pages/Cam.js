import React from "react";
import { Link } from "react-router-dom";
import Cameraview from "../components/Cameraview";

const Cam = () => {
  return (
    <div>
      <div style={{ zIndex: 10000000, position: "absolute" }}>
        <Link to="/celebration">Celebrate </Link>
      </div>
      <div style={{ zIndex: 0 }}>
        <Cameraview />
      </div>
    </div>
  );
};

export default Cam;
