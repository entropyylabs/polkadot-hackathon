import React from "react";

const SplashScreen = () => {
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-4xl text-gray-100 font-work-sans">
      <img
        className="absolute top-[182px] left-[93px] w-[203px] h-[229.31px]"
        alt=""
        src="../stamps-logo.svg"
      />
      <div className="absolute text-[32px] top-[422px] left-[130px] tracking-[0.2px] leading-[32px] font-medium flex items-center w-[129px] h-[29px]">
        stamps!
      </div>
      <div className="absolute top-[610px] text-[16px] left-[130px] text-xl tracking-[0.2px] leading-[16px] font-medium flex items-center w-[129px] h-[19px]">
        by entropy labs
      </div>
    </div>
  );
};

export default SplashScreen;
