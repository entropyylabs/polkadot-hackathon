import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="relative bg-goldenrod w-full h-[665px] overflow-hidden text-left text-lg text-black font-work-sans">
        <div className="absolute top-[175px] left-[21px] w-[313px] h-[41px] text-2xl">
          <p className="m-0 absolute top-[0px] left-[0px] leading-[24px] flex items-center w-[313px] h-[41px] text-[24px]">
            HELLO AGAIN!
          </p>
        </div>
        <img
          className="absolute top-[36px] left-[21px] w-[104px] h-[114.4px]"
          alt=""
          src="../stamps-logo.svg"
        />
        <form onSubmit={handleSubmit}>
          <div className="absolute top-[252px] left-[21px] w-[348px] h-[70px]">
            <Input
              className="bg-[transparent] absolute top-[22px] left-[0px]"
              variant="outline"
              width="348px"
              borderColor="#262626"
              w="348px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[73px] h-[18px] text-[16px]">
              Email
            </div>
          </div>
          <div className="absolute top-[346px] left-[21px] w-[348px] h-[70px]">
            <Input
              className="bg-[transparent] absolute top-[22px] left-[0px]"
              variant="outline"
              width="348px"
              borderColor="#262626"
              w="348px"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[150px] h-[18px] text-[16px]">
              Create a password
            </div>
          </div>
          <button className="absolute top-[480px] left-[21px] rounded-lg bg-mediumblue w-[348px] h-[46px] text-center text-white">
            <div className="absolute top-[15px] w-100 text-center tracking-[0.6px] leading-[16px] font-medium w-full text-center text-[16px]">
              Login and play!
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
