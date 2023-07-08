import React from "react";

//css
import "./box.css";

const Box = ({ text, handleChangeColor, color }) => {
  const boxStyle = {
    backgroundColor: color,
  };
  return (
    <>
      <div
        className={`wrapper-box`}
        style={boxStyle}
        onClick={handleChangeColor}
      >
        {`Box #${text + 1}`}
      </div>
    </>
  );
};

export default Box;
