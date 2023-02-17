import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import Word from "../components/Word";
import { Progress } from "antd";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Clue2 = ({ height }) => {
  const [counter, setCounter] = useState(100);
  const [done, setDone] = useState(false);
  const [doneCounter, setDoneCounter] = useState(3);
  useEffect(() => {
    counter < 5 && setDone(true);
    done && console.log("done");
    counter > 0 && setTimeout(() => setCounter(counter - 5), 1000);
  }, [counter]);
  return (
    <div className="relative bg-[#FFC022] w-full h-[844px] overflow-hidden text-left text-xs text-black font-work-sans">
      <div className="absolute top-[168px] left-[32px]  h-[442px] object-cover">
        <Word />
      </div>
      <p className="m-0 absolute top-[83px] left-[21px] tracking-[0.2px] leading-[32px] flex items-center w-[61px] h-3.5">
        CLUE 1
      </p>
      <p className="m-0 absolute top-[103px] left-[21px] text-base tracking-[0.2px] leading-[24px] flex items-center w-[313px] h-[41px]">
        Find the blah blah of the blah blah of the blah blah
      </p>
      {done ? (
        <div className="absolute top-[556px] left-[34px] w-[322px] h-[50px] text-center text-2xl text-gray-100">
          <div className="absolute text-[20px] top-[0px] left-[0px] tracking-[0.2px] leading-[24px] flex items-center justify-center w-[322px] h-[50px]">
            WELL DONE! THATS CORRECT!
          </div>
          <div className="absolute text-[20px] top-[60px] left-[0px] tracking-[0.2px] leading-[24px] flex items-center justify-center w-[322px] h-[50px]">
            <Button
              height="32px"
              width="130px"
              style={{
                background: "#3A00E5",
                borderRadius: 8,
                color: "#fff",
                fontWeight: 400,
              }}
            >
              <Link to="/geoguesser"> Next clue</Link>
            </Button>
          </div>
        </div>
      ) : (
        <Progress
          className="absolute top-[646px] left-[21px]"
          style={{ width: 348 }}
          type="line"
          percent={counter}
          strokeLinecap="round"
          gapPosition="bottom"
          showInfo={false}
        />
      )}
    </div>
  );
};

export default Clue2;
