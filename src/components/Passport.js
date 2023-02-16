import React from "react";
import HTMLFlipBook from "react-pageflip";

const Passport = () => {
  return (
    <div>
      <HTMLFlipBook width={348} height={630}>
        <div className="demoPage">
          <div
            style={{
              backgroundColor: "yellow",
              display: "flex",
              height: "100%",
            }}
          >
            <h1>Hello World</h1>
          </div>
        </div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
      </HTMLFlipBook>
    </div>
  );
};

export default Passport;
