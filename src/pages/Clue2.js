import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import Word from "./Word";
import { Icon, IconButton } from "@mui/material";
import { Progress } from "antd";
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
        <h1 className="absolute top-[646px] left-[21px]">Done</h1>
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

      <IconButton
        className="absolute top-[75px] left-[41px] [transform:_rotate(-180deg)] [transform-origin:0_0]"
        color="primary"
      >
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
    </div>
  );
};

export default Clue2;
