import React from "react";
import Cameraview from "../components/Cameraview";

const Cam = () => {
  return (
    <div>
      <div style={{ zIndex: 10000000 }}>Hello</div>
      <div style={{ zIndex: 0 }}>
        <Cameraview />
      </div>
    </div>
  );
};

export default Cam;
