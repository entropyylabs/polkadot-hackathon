import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

const Cameraview = () => {
  const camera = useRef(null);
  return (
    <div>
      <Camera ref={camera} facingMode="environment" />
    </div>
  );
};

export default Cameraview;
