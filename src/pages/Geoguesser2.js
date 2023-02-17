import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GeoGuesser from "../components/GeoGuesser";

const Geoguesser2 = () => {
  return (
    <div className="relative bg-white w-full h-[665px] overflow-hidden text-left text-sm text-black font-work-sans">
      <div className="absolute top-[140px] left-[32px] w-[325px] h-[330px]">
        <div className="absolute top-[0px] left-[0px] w-[325px] h-[330px] object-cover">
          <GeoGuesser />
        </div>
      </div>
      <div className="absolute top-[46px] left-[21px] w-[313px] h-[58px]">
        <p className="m-0 absolute top-[12px] left-[0px] tracking-[0.2px] leading-[32px] flex items-center w-[61px] h-3.5">
          CLUE 1
        </p>
        <p className="m-0 absolute top-[22px] left-[0px] text-lg leading-[24px] flex items-center w-[313px] h-[41px]">
          Guess this place!
        </p>
      </div>
      <div className="absolute top-[486px] left-[54px] w-72 h-10 text-center text-base text-orangered">
        <p className="m-0 absolute top-[0px] left-[0px] leading-[20px] font-bold flex items-center justify-center w-72 h-10">
          SEEMS LIKE THE STAMP IS AROUND YOU!
        </p>
      </div>
      <Link to="/hunt">
        <img
          className="absolute top-[14px] left-[21px] w-5 h-5"
          alt=""
          src="../back-icon.svg"
        />
      </Link>
      <button className="cursor-pointer [border:none] p-0 bg-[#262626] absolute top-[544px] left-[102px] rounded-lg w-[186px] h-[46px]">
        <div className="absolute top-[15px] left-[35px] w-[118px] h-4">
          <div className="absolute top-[0px] left-[19px] text-sm tracking-[0.6px] leading-[16px] text-white text-center">
            <Link to="/cam">
              <span className="font-work-sans">Grab it now</span>
            </Link>
          </div>
          <img
            className="absolute top-[1px] left-[0px] w-[13px] h-3.5 overflow-hidden"
            alt=""
            src="../camera.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default Geoguesser2;
