import React from "react";
import { Link } from "react-router-dom";
import Cameraview from "../components/Cameraview";

const Cam = () => {
  return (
    <div>
      <div style={{ zIndex: 10000000, position: "absolute" }}>
        <Link to="/celebration">
          <img
            className="fixed top-[250px] left-[100px] h-[202px] w-[207px]"
            alt=""
            src="../mickey.png"
          />
        </Link>
      </div>
      <div style={{ zIndex: 0 }}>
        <Cameraview />
      </div>
    </div>
  );
};

export default Cam;
